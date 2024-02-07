"use client"

import Image from 'next/image'
import { FaTrash } from "react-icons/fa";
import useCartStore from '../cartStore'


function Cart() {
     const cart = useCartStore(state=>state.cart)
     const removeFromCart = useCartStore(state=>state.removeFromCart)
     const cartTotal = useCartStore(state=>state.cartTotal)
     const totalItems  =useCartStore(state=>state.totalItems)


     const handleRemoveFromCart= (productId) =>{
       removeFromCart(productId)
     }

  return (
    <div className='max-w-3xl mx-auto mt-20'>
      <h1 className='text-3xl text-center font-semibold text-[#582086] mb-6'>cart</h1>
     <table className='w-full border-collapse '>
       <thead>
           <tr className='text-[#582086] border-b border-gray-200'>
           
           <th className=' px-4 py-3'>product</th>
           <th className=' px-4 py-3'>price</th>
           <th className=' px-4 py-3'>Qty</th>
           <th className=' px-4 py-3'>Remove</th>
           </tr>
       
       </thead>

       <tbody>
         {cart.map((each)=>(
            <tr className='cursor-pointer hover:bg-gray-50 text-center border-b border-gray-300 text-[#582086]' key={each.id}>
             <td className='py-2 px-4 flex items-center'>
             <Image src={each?.image} width={50} height={50} alt='product image' className='rounded-full mr-2' />
             {each.name}
             
             </td>
             <td className='py-2 px-4'>${each.price}</td>
             <td className='py-2 px-4'>{each.quantity}</td>
             <td className='py-2 px-4'>
               <FaTrash onClick ={()=>handleRemoveFromCart(each?._id)} className='text-[#582086] mx-auto hover:cursor-pointer'/>

             </td>
            </tr>
         ))}
       </tbody>
     </table>
     

     <div className="space-x-4 justify-between mt-10">
      <span className="text-lg font-semibold text-[#582086]">Total</span>
      <span className="text-lg font-semibold text-[#582086]">${cartTotal}</span>
     </div>

     <div className=" mt-6 max-w-sm mx-auto space-y-4">
     <button className="bg-[#582086] text-white text-lg py-3 px-6 font-semibold rounded-md w-full ">Checkout</button>
     </div>
      </div>
  )
}

export default Cart
