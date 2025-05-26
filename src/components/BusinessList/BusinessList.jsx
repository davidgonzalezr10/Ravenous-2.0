import React from 'react';
import Business from '../Business/Business';

const BusinessList = ({ BusinessData }) => {
    console.log('BusinessList received data:', BusinessData)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full px-50 pt-20'>
            { 
                BusinessData && BusinessData.length > 0 ? BusinessData.map((business, index) => {
                    console.log('Rendering business:', business)
                    return <Business key={business.id} business={business} />
                }) : null
            }
        </div>
    )
}

export default BusinessList;