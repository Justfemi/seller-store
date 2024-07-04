import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <h2>cart</h2>
      <Link to="/">Back to store</Link>
      <Link to="/checkout">Checkout</Link>
    </div>
  )
}

export default Cart