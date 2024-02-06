

function Order() {
    const products = [
        {id:1, name:"okoye 1",paid:"paid",qty:2,status:"delivered"},
        {id:2, name:"john 1",paid:"paid",qty:1,status:"delivered"},
    ]
  return (
    <div className='max-w-3xl mx-auto mt-20'>
      <h1 className='text-3xl text-center font-semibold text-[#582086] mb-6'>cart</h1>
     <table className='w-full border-collapse '>
       <thead>
           <tr className='text-[#582086] border-b border-gray-200'>
           
           <th className=' px-4 py-3'>product</th>
           <th className=' px-4 py-3'>Qty</th>
           <th className=' px-4 py-3'>paid</th>

           <th className=' px-4 py-3'>status</th>
           </tr>
       
       </thead>

       <tbody>
         {products.map((each)=>(
            <tr className='cursor-pointer hover:bg-gray-50 text-center border-b border-gray-300 text-[#582086]' key={each.id}>
             <td className='py-2 px-4 flex items-center'>
             {each.name}
             
             </td>
             <td className='py-2 px-4'>{each.paid}</td>
             <td className='py-2 px-4'>{each.qty}</td>
             <td className='py-2 px-4'>{each.status}</td>
            
            </tr>
         ))}
       </tbody>
     </table>
      </div>
  )
}

export default Order;
