// import { useParams } from "react-router-dom";
// // import { products } from '../../../data';
// import { useEffect, useState } from "react";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [detail, setDetail] = useState([]);

//   useEffect(() => {
//     const findDetail = products.filter(product => product.id === id);
//     if(findDetail.length > 0){
//       setDetail(findDetail[0]);
//     } else {
//       window.location.href = '/';
//     }
//   }, [id])
//   return (
//     <div>
//       <h1>Product Details</h1>
//       <div>
//         <h2>{detail.title}</h2>
//         <p>{detail.description}</p>
//       </div>
//       <div>
//         <img src={detail.image} alt={detail.title} />
//       </div>
//     </div>
//   )
// }

// export default ProductDetails