import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cart = ({ cart, handleRemoveFromCart, 
  handleIncrementQuantity, handleDecrementQuantity, 
  getTotalAmount }) => {

  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  }

  return (
    <div className="mx-auto p-3 w-[90%] max-w-full">
      <div className="flex items-center justify-between h-[50px] mb-5">
        <h2 className="text-2xl">Cart</h2>
        <div className="">
          <Link to="/" className="text-blue-500 underline mb-5">Back to Store</Link>
        </div>
      </div>
      <div className='w-1/2 gap-8 mx-auto'>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b border-b-black mb-5 py-2">
              <div className='w-[50px]'>
                <img src={item.image} alt={item.title} className=''/>
              </div>
              <h2 className='text-md'>{item.title}</h2>
              <p>#{item.price}</p>
              <div className='flex items-center'>
                <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
              </div>
              <button className='border px-2 py-1 border-black'
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <>
            <div className="mt-5">
              <h3 className="text-xl">Total Amount: #{getTotalAmount()}</h3>
            </div>

            <button className='border px-2 py-1 border-black'
              onClick={goToCheckout}
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
  handleIncrementQuantity: PropTypes.func.isRequired,
  handleDecrementQuantity: PropTypes.func.isRequired,
  getTotalAmount: PropTypes.func.isRequired,
};

export default Cart;
