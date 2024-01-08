import { useContext, useEffect, useState } from "react"
import { getWishlist } from "../../services/wishlistService"
import AuthContext from "../../contexts/authContext"

import { ProductCard } from "../Product/ProductCard/ProductCard"

import './Wishlist.css'

export default function Wishlist() {
    const { userId } = useContext(AuthContext)
    const [wishlistedProductsObjects, setwishlistedProductsObjects] = useState([])


    useEffect(() => {
        getWishlist(userId)
            .then(res => setwishlistedProductsObjects(res))
    }, [])
    return (
        <div className="wishlistedProductsBlock profile-products">
            {wishlistedProductsObjects.length > 0 ? (
                <>
                    <h2>Your wishlisted products</h2>
                    <div className="wishlistedProducts">
                        {wishlistedProductsObjects.map(element => (
                            <ProductCard {...element} key={element._id} />
                        ))}
                    </div>
                </>

            ) : (
                <h2 className="noWishlistedProducts">No wishlisted products yet</h2>
            )}
        </div>
    )
}