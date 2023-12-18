import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import './Profile.css'

import ProductProfile from "../Product/ProductProfile/ProductProfile"
import Wishlist from '../Wishlist/Wishlist'
import Path from "../../paths"

export default function Profile() {
    const [menu, setMenu] = useState('created')

    function menuSwitcher() {
        if (menu == 'created') {
            setMenu('wishlist')
        } else {
            setMenu('created')
        }
    }

    return (
        <div className="user-profile">
            <ul className="profile-options">
                    <li><button onClick={menuSwitcher}>Created Products</button></li>
                    <li><button onClick={menuSwitcher}>Wishlisted Products</button></li>
                    <li><Link className='profile-nav-add profile-nav' to={'/product/add'}>Add New Product</Link></li>
                    <li><Link className='profile-nav-logout profile-nav' to={Path.Logout}>Logout</Link></li>
            </ul>
            {menu == 'created' 
            ? <ProductProfile/>
            : <Wishlist/>
            }
            
 
        </div>
    )
}

