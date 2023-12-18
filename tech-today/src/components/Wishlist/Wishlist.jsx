import { useContext, useEffect } from "react"
import { getWishlist } from "../../services/productService"
import AuthContext from "../../contexts/authContext"

export default function Wishlist() {
    const {wishlistedProducts} = useContext(AuthContext)

    useEffect(() => {
        getWishlist(wishlistedProducts)
            .then(res => console.log(res))
    })
    return (
        <div className="wishlistedProducts">
            <h2>Here are your wishlisted products</h2>
            <ul>
                <li>Product 1</li>
                <li>Product 2</li>
            </ul>
        </div>
    )
}