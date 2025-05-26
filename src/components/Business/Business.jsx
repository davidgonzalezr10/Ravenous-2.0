import React from 'react'

const Business = ({ business }) => {

    const onImageClick = (event) => {
        window.open(business.url, '_blank')
    }

    const onAddressClick = (event) => {
        const address = `${business.address}, ${business.city}, ${business.state} ${business.zipCode}`.replace(/\s+/g, '+');
        const googleUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
        window.open(googleUrl, '_blank');
    }

    return (
        <div className='bg-card-bg rounded-lg overflow-hidden shadow-lg max-w-full w-full mx-auto mb-4'>
            <div className='relative'>
                <img 
                    src={ business.imageSrc } 
                    alt={ business.name } 
                    className='w-full h-80 object-cover cursor-pointer' 
                    onClick={onImageClick}
                />
            </div>
            <h2 className='p-2 text-xl text-left pl-6 pt-5 pb-3 font-extrabold'>{ business.name }</h2>
            <div className='flex justify-between items-center px-2 pb-4 mb-1'>
                <div className='flex-1 text-left pl-4 group cursor-pointer' onClick={onAddressClick}>
                    <p className='text-xs text-white mb-1 block'><span className='inline-block relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all group-hover:after:w-full'>{ business.address }</span></p>
                    <p className='text-xs font-bold text-white mb-1 block'><span className='inline-block relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all group-hover:after:w-full'>{ business.city }</span></p>
                    <p className='text-xs text-white mb-1 block'><span className='inline-block relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all group-hover:after:w-full'>{ `${ business.state } ${ business.zipCode }`}</span></p>
                </div>
                <div className='flex-1 text-right pr-4 '>
                    <h3 className='text-sm'>{ business.category }</h3>
                    <div className='flex items-baseline justify-end gap-1 '>
                        <h3 className='text-amber-300 font-bold text-sm'>{ business.rating }</h3>
                        <span className='text-amber-300 text-sm'>★</span>
                    </div>
                    <p className='text-xs mb-1'>{ `${ business.reviewCount } reviews` }</p>
                </div>
            </div>

        </div>
    )
}

export default Business;