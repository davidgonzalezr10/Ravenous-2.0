import React from 'react'

const Business = () => {
  return (
    <div className='Business'>
        <div className='image-container'>
            <img src={business} alt="business" />
        </div>
        <h2>Business Name</h2>
        <div className='Business-information'>
            <div className='Business-address'>
                <p>Address</p>
                <p>City</p>
                <p>State & Zip Code</p>
            </div>
            <div className='Business-reviews'>
                <h3>Business Category</h3>
                <h3>Rating</h3>
                <p>Reviews</p>
            </div>
            
                
        </div>

    </div>
  )
}

export default Business;