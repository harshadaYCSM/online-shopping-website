import Rating from 'react-rating-stars-component';
import "../styles/productThumbnail.css"

function Thumbnail(props) {

    return (

        <div className="product-thumbnail">
            <img className="product-image" src={props.image} alt={props.title}></img>
            <p className="product-title">{props.title}</p>
            <p className="product-price">Rs. {props.price}</p>
            <Rating
                count={5}
                value={props.rating.rate}
                size={24}
                activeColor="#ffd700"
                edit={false}
            />                 
            ({props.rating.count})
        </div>
    )
}

export default Thumbnail;