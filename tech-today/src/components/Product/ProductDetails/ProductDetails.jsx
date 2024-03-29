import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import './ProductDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartCirclePlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'

import * as productService from '../../../services/productService'
import * as commentService from '../../../services/commentService'
import * as wishlistService from '../../../services/wishlistService'
import AuthContext from '../../../contexts/authContext'

export default function ProductDetails() {
    const navigate = useNavigate()
    const {userId, username, isAuthenticated} = useContext(AuthContext)
    const [product, setProduct] = useState({})
    const [comments, setComments] = useState([])
    const [isWishlisted, setIsWishlisted] = useState(false)
    const {productId} = useParams()

    const isOwner = userId === product._ownerId
    const dateAdded = new Date(product._createdOn)

    useEffect(() => {
        const fetchData = async () => {
            if (productId) {
                try {
                    const productData = await productService.getOne(productId)
                    setProduct(productData)

                    const commentsData = await commentService.getAll(productId)
                    setComments(commentsData)

                } catch (error) {
                    console.error(error)
                }
            }
            if (userId) {
                const wishlistStatus = await wishlistService.isWishlisted(userId, productId)
                setIsWishlisted(!!wishlistStatus.length)
            }
        }
        fetchData();
    }, [productId])


    const addCommentHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        
        const newComment = await commentService.add(
            productId, 
            formData.get('comment-form-text')
        )
            
        setComments(prevState =>  [...prevState, {...newComment, owner: {username}}])
        
        
    }

   
    const deleteButtonClickHandler = async () => {
        
        await productService.remove(productId)
        navigate('/')
    }

    async function wishlistHandler() {
        if (isWishlisted) {
                wishlistService.removeFromWishlist(userId, productId)
            setIsWishlisted(false);
          } else {
                wishlistService.addToWishlist(userId, productId)
            setIsWishlisted(true);
          }
 
    }


    return (
        <div className='product-page'>
            <article className="product-details">
                <img className="details-image" src={product.imageUrl} />
                <div className='details-details'>
                    <h1 className="details-name">{product.name}</h1>
                    <p className='details-added'>Added on {dateAdded.toLocaleDateString()}</p>
                    <p className="details-price"> Price: <span>${product.price}</span></p>
                    
                    <p>{product.description}</p>
                    <div className='user-controls'>
                    {
                        isAuthenticated && (
                            <button className='button heart' onClick={wishlistHandler}>
                                { isWishlisted 
                                    ? <><FontAwesomeIcon icon={faHeartCircleXmark} /> Remove from Wishlist</> 
                                    : <><FontAwesomeIcon icon={faHeartCirclePlus} /> Add to Wishlist</>}
                            </button>
                        )
                    }

                    
                    { isOwner && isAuthenticated && (
                        <div className='owner-controls'>
                            <Link to={`/products/${product._id}/edit`} className='button'>Edit</Link>
                            <button className='button' onClick={deleteButtonClickHandler}>Delete</button>
                        </div>
                        )

                    }
                    </div>


                </div>

            </article>
            <div className='product-comments'>

                {isAuthenticated && (
                    <div className='add-comment'>
                        <form className="add-comment-form" onSubmit={addCommentHandler}>

                            <textarea name="comment-form-text" cols="30" rows="3" placeholder='comment'></textarea>
                            <input type="submit" value="Post comment " />
                        </form>

                    </div>
                )}

                <div className='product-comments'>
                    <ul>
                        {comments.map(({_id, text, owner: {username}}) => (
                            <li key={_id} className='comment'>
                                <p className='comment-user'>{username}</p>
                                <p className='comment-text'>{text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p>No comments</p>
                    )}
                </div>
            </div>
        </div>

    )
}
