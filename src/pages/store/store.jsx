import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BsCart3 } from "react-icons/bs";
import Loader from '../../components/Loader';
import Products from '../../../data'
import RatingStars from '../../components/ratingStars';
import PropTypes from 'prop-types';

const Store = ({ cart, handleAddToCart}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }

    fakeDataFetch();
  }, []);

  return (
    isLoading ? ( <Loader /> ) : (
      <div className='mx-auto p-3 w-[90%] max-w-full'>
        <div className="flex items-center justify-between h-[50px] mb-5">
          <h2 className="text-2xl">Store</h2>
          <div className="w-12 h-12 bg-gray-100 rounded-full flex 
            justify-center items-center relative"
          >
            <Link to="/cart">
              <BsCart3 className="text-2xl" />
              <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm 
                w-5 h-5 rounded-full flex items-center justify-center"
              >{ cart.length }</span>
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          { 
            Products && Products.map(product => {
              return (
                <div key={product.id} className="border border-black p-3">
                  <div className='w-full h-[200px]'>
                    <img src={product.image} alt={product.title} className='w-full h-full'/>
                  </div>
                  <h2 className='text-2xl my-1'>{ product.title }</h2>
                  <div className='flex items-center justify-between my-1'>
                    <RatingStars rating={product.rating} />
                    <p>#{product.price}</p>
                  </div>
                  <button className='border rounded-lg  px-2 py-1 border-black'
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  )
}

Store.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default Store