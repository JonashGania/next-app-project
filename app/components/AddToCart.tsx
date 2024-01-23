'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button onClick={() => console.log("Added to cart")} className='text-black'>Add to Cart</button>
    </div>
  )
}

export default AddToCart