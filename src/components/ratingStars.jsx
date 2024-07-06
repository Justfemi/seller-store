
function RatingStars({ rating }) {
  const stars = [];

  for (let i = 0; i < 5; i++){
    if (i < rating) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 fill-current text-yellow-500"
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.124-6.545L0 6.91l6.561-.955L10 0l2.439 5.955L19 6.91l-5.246 4.635 1.124 6.545z" />
        </svg>
      );
    } else {
      stars.push (
        <svg
          key={i}
          className="w-4 h-4 fill-current text-gray-300"
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.124-6.545L0 6.91l6.561-.955L10 0l2.439 5.955L19 6.91l-5.246 4.635 1.124 6.545z" />
        </svg>
      );
    }
  }

	return (
		<div className="flex">{stars}</div>
	);
}

export default RatingStars;