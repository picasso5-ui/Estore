import Image from 'next/image'
import { FaTrash } from "react-icons/fa";


function Cart() {
    const products = [
        {id:1, name:"okoye 1",price:20,qty:2},
        {id:2, name:"john 1",price:200,qty:1},
    ]
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
         {products.map((each)=>(
            <tr className='cursor-pointer hover:bg-gray-50 text-center border-b border-gray-300 text-[#582086]' key={each.id}>
             <td className='py-2 px-4 flex items-center'>
             <Image src="/art1.avif" width={50} height={50} alt='product image' className='rounded-full mr-2' />
             {each.name}
             
             </td>
             <td className='py-2 px-4'>${each.price}</td>
             <td className='py-2 px-4'>{each.qty}</td>
             <td className='py-2 px-4'>
               <FaTrash  className='text-[#582086] mx-auto hover:cursor-pointer'/>

             </td>
            </tr>
         ))}
       </tbody>
     </table>
      </div>
  )
}

export default Cart
