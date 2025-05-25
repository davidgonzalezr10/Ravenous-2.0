import React from 'react';
import Business from '../Business/Business';

const BusinessList = ({ BusinessData }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full px-4'>
            { 
                BusinessData ? BusinessData.map((business, index) => {
                    return <Business key={index} business={business} />
                }) : null
            }
        </div>
    )
}

export default BusinessList;