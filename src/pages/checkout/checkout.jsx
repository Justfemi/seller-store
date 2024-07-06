import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className='mx-auto p-3 w-[90%] max-w-full'>
      <div className="flex items-center justify-between h-[50px] mb-5">
        <h2 className="text-2xl">Checkout</h2>
        <div className="">
          <Link to="/cart" className="text-blue-500 underline mb-5">Back to Cart</Link>
        </div>
      </div>
    </div>
  )
}

export default Checkout