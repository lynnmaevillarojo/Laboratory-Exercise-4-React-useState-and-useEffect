
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import "./App.css";

function App() {

  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  function handleAddToCart(productTitle) {
    setCartCount(cartCount + 1);
    setLastAdded(productTitle);
  }

  return (
    <div className="app-container">

      <header>
        <h1>Litolfy Store</h1>
        <p>Discover your favorites at Litolfy!</p>
      </header>

      <div className="cart-message">

        {cartCount === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <p>
            Items added to cart: {cartCount}
            (Last added: {lastAdded})
          </p>
        )}

      </div>

      <h2 className="section-title">Our Products</h2>

      <div className="product-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >

            {product.id === 1 && <span>New</span>}

            {product.id === 5 && <span>Sale</span>}

          </ProductCard>
        ))}

      </div>

      <footer>
        <p>© 2026 Litolfy Store | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
