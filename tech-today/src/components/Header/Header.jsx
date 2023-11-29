import { Link } from 'react-router-dom'

import './Header.css'

import Logo from './assets/tt_logo.svg'
import { Home } from '../Home/Home'

export const Header = () => {
    return (
        <>  
            <header className='site-header'>
                <div className='logo-container'>
                    <Link to={'/'}><img src={Logo} className='header-logo'/></Link>
                </div>
                {/* <button className='header-button'>Hello</button> */}
                <ul className='header-nav'>
                    <li><Link className='nav-home nav' to='/'>Home</Link></li>
                    <li><Link className='nav-login nav' to='/login'>Login</Link></li>
                    <li><Link className='nav-add nav' to={'/product/add'}>Add New Product</Link></li>
                </ul>
            </header>

        </>
    )
}