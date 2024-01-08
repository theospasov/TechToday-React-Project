import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import './Profile.css'

import ProductProfile from "../Product/ProductProfile/ProductProfile"
import Wishlist from '../Wishlist/Wishlist'
import Path from "../../paths"

export default function Profile() {
    const [menu, setMenu] = useState('created')

    function menuSwitcher(e) {
        let selected = e.target.textContent
        if (selected == 'Wishlisted Products') {
            setMenu('wishlist')
        } else {
            setMenu('created')
        }
    }


    return (
        <div className="user-profile">
            <ul className="profile-options">
                    <li><button className='profile-nav' onClick={menuSwitcher}>Created Products</button></li>
                    <li><button className='profile-nav wishlist' onClick={menuSwitcher}>Wishlisted Products</button></li>
                    <li className="separator"></li>
                    <li><Link className='profile-nav new-product' to={'/product/add'}>Add New Product</Link></li>
                    <li><Link className='profile-nav logout' to={Path.Logout}>Logout</Link></li>
            </ul>
            {menu == 'created' 
            ? <ProductProfile/>
            : <Wishlist/>
            }
            
 
        </div>
    )
}

