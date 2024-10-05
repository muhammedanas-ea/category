import "./productCard.css";
import { productProps } from "./type";

const ProductCard = ({ image, title }: productProps) => {
  return (
    <div className="card">
      <div className="imgae-container">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">
          <span>Sign in</span> or Create an account to see pricing
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
