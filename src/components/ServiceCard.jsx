import React from 'react'

const ServiceCard = ({imgURL,label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[200px] sm:min-w-[200px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 justify-center items-center bg-coral-red rounded-full flex'>
        <img src={imgURL} alt={label}
        width={24}
        height={24}
         />
      </div>
      <h3 className='mt-5 font-palanquin font-2xl leading-normal font-bold'>{label}</h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard