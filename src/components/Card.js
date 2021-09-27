//image base path=>https://image.tmdb.org/t/p/w500/poster_path
const Card = ({ title, rating, adult, image, release_date }) => {
  //console.log({title,rating,adult,image})
  return (
    <div className="card">
      <img
        className=" card_image"
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={title}
              loading="lazy"
              style={adult?{filter: 'blur(4px)'}:{}}
      />
      <p className="card_title">{title}</p>
      <p className="card_rating">Rating:{rating}</p>
      <p>{release_date}</p>
    </div>
  );
};

export default Card;
