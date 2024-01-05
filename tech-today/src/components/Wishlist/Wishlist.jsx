import { useContext, useEffect, useState } from "react"
import { getWishlist } from "../../services/wishlistService"
import AuthContext from "../../contexts/authContext"

import { ProductCard } from "../Product/ProductCard/ProductCard"

export default function Wishlist() {
    const {userId} = useContext(AuthContext)
    const [wishlistedProductsObjects, setwishlistedProductsObjects] = useState([])


    useEffect(() => {
        getWishlist(userId)
            .then(res => setwishlistedProductsObjects(res))
    }, [])
    return (
        <div className="wishlistedProductsBlock">
            
            { wishlistedProductsObjects.length > 0 
            ? wishlistedProductsObjects.map(element => (
                <div className="wishlistedProducts" key={element._id}>
                    <h2>Here are your wishlisted products</h2>
                    <ProductCard {...element}/>
                </div>
            ))
            : <h2 className="noWishlistedProducts">No whishlisted products yet</h2>
            }
        </div>
    )
}