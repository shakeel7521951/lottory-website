import React from 'react'
import Header from '../Header';
import './CheckOut.css';
import countryTickets from '../CountryTickets';
import Footerr from '../Footerr';

const CheckOut = () => {
    return (
        <>
        <div className='container-fluid'>
            <Header />
            <div className='row check-container'>
                <h2 className='text-light'>CheckOut</h2>
                <hr className='border-2 text-light' />
                <div className='col-12 col-md-8 mx-auto p-4 justify-content-center align-items-center text-center mt-3 checkout'>
                    <i class="bi bi-cart2 ms-2 text-primary"></i>
                    <h3 className='text-danger my-3'>Unfortunately, your cart is empty</h3>
                    <p className='text-black'>Please add something to your cart</p>
                    <button type='button' className='button btn btn-syndicates my-2' onClick={()=>document.location.href='/'}>Play now</button>
                </div>
                <h3 className='text-center my-4 text-light'>Why not try...</h3>
                <div className='row mt-5'>
                    {
                        countryTickets.map((value, index) => (
                            <div key={index} className='col-12 col-md-4 d-flex justify-content-center mb-4'>
                                <div className='carts text-center bg-light rounded text-black' onClick={() => document.location.href = '/play'}>
                                    <img src={value.image} alt='Logo' className='img-fluid' />
                                    <h4>{value.countryName}</h4>
                                    <h1>${value.pirce}</h1>
                                    <button className='rounded-pill w-32'>Play now</button>
                                    <p>Closes in: {value.closeTime}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
          
        </div>
          <Footerr />
         </>
    )
}
export default CheckOut;