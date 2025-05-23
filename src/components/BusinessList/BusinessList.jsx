import React from 'react';
import Business from '../Business/Business';

const BusinessList = ({ BusinessData }) => {
    return (
        <div>
            { 
                BusinessData ? BusinessData.map((business, index) => {
                    return <Business key={index} business={business} />
                }) : null
            }
        </div>
    )
}

export default BusinessList;