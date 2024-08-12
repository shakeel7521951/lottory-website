import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [cartitemsShow, setCartItems] = useState(false);
    const [menuShow, setMenuShow] = useState(false);

    const handleMenu = () => {
        setMenuShow(!menuShow);
    }

    const handleCartShow = () => {
        setCartItems(!cartitemsShow);
    }

    return (

        <div className='sticky_navbar'>
            <div className='row bg-black  '>
                <div className='col-12 col-md-10 mx-auto header p-2'>
                    <div className='d-flex justify-content-between align-items-center text-center' >
                        <div className="col-2 col-md-2">
                            <img
                                src="https://incomeaccess.com/fileadmin/uploads/2020/09/logo-lottery-office.jpg"
                                className="cursor-pointer websiteLogo w-100 w-md-75"
                                onClick={() => window.location.href = '/'}
                                alt="Lottery office logo"
                            />
                        </div>

                        <div className='col-8 col-md-6 d-flex align-items-center justify-content-end'>
                            <div className=' d-flex signup rounded-pill' onClick={() => window.location.href = '/signup'}>
                                <button type='button'>Sign up</button>
                                <i class="bi bi-star"></i>
                            </div>
                            <div className='loginButton' onClick={() => window.location.href = '/login'}>
                                <button type='button'>Login</button>
                                <i class="bi bi-arrow-right-circle"></i>
                            </div>
                            <div className=' cart d-flex' onClick={handleCartShow}>
                                <button type='button'>Cart</button>
                                <i class="bi bi-cart2 ms-2 text-light"></i>
                                <p className='textSize text-danger'>0</p>
                            </div>
                        </div>
                        {
                            cartitemsShow && (
                                <div className='cartItems'>
                                    <i class="bi bi-cart2 ms-2 text-primary"></i>
                                    <p className='text-danger'>Unfortunately, your cart is empty</p>
                                    <p className='text-black textSize'>Please add something to your cart</p>
                                    <button type='button' className='playNowBitton rounded-pill'>Play now</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className='row bg-light border-bottom justify-content-between '>
                <div className='col-6 col-md-8 mx-md-auto links' >
                    <Link to='/'>All Lotteries</Link>
                    <Link to='/syndicates' >Syndicates</Link>
                    <Link to='/combo' >Combos</Link>
                    <Link to='/results' >Results</Link>
                    <Link to='/contact' >Contact us</Link>
                </div>
                <div className='col-2 d-flex cursor-pointer text-center align-items-center justify-content-center menuButton' onClick={handleMenu} style={{ position: 'relative' }}>
                    <Link to='' className='fs-6' >Menu</Link>
                    <i class="bi bi-chevron-down fs-6"></i>
                </div>
            </div>
            {/* menu drop down */}
            {
                menuShow && (
                    <div className='menuDropDown'>
                        <p className='bg-primary p-4 fs-6 text-light'>Australia official way to play international lotteries</p>
                        <div className='d-flex justify-content-between  px-2 menucontent'>
                            <Link to='/how-it-works'>How it works</Link>
                            <i class="bi bi-chevron-right text-primary"></i>
                        </div>

                        <hr className='text-black' />

                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/winners'>Recent Winners</Link>
                            <i class="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />

                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/app'>Download App</Link>
                            <i class="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />

                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/syndicates'>Lotto Syndicates</Link>
                            <i class="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />

                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/lotto-systems'>Lotto Systems</Link>
                            <i class="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />

                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/combo'>Lotto Combos</Link>
                            <i class="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />

                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/results'>Lotto Results</Link>
                            <i class="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />

                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/pay-in-store'>Pay In-Store Locator</Link>
                            <i class="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />

                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/charity'>Charity</Link>
                            <i class="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />

                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/about'>About Us</Link>
                            <i class="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />

                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/magzine'>Lottery Office Magazine</Link>
                            <i class="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />

                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/faqs'>Frequently Asked Questions</Link>
                            <i class="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />

                        <div className='d-flex justify-content-between px-2 menucontent mb-5'>
                            <Link to='/contact'>Contact us</Link>
                            <i class="bi bi-chevron-right text-primary"></i>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Header;
