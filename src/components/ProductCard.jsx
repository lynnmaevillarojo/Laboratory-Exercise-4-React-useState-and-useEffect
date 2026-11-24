
import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children
}) {

  return (
    <div className={`product-card ${!inStock ? "out-of-stock" : ""}`}>

      <div className="product-badge">
        {children}
      </div>

      <h3>{title}</h3>

      <p className="category">{category}</p>

      <h2>₱{price.toLocaleString("en-PH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}</h2>

      {inStock ? (
        <p className="stock available">In Stock</p>
      ) : (
        <p className="stock unavailable">Out of Stock</p>
      )}

      <button
        onClick={() => onAddToCart(title)}
        disabled={!inStock}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;
