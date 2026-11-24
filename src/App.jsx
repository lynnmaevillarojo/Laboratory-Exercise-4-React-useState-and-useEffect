
import { useState, useEffect } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  // Search and filter states
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Cart states from Lab 3
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Sort products without changing the original array
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-to-high") {
      return a.price - b.price;
    }

    if (sortOrder === "high-to-low") {
      return b.price - a.price;
    }

    return 0;
  });

  // Update browser tab title
  useEffect(() => {
    document.title = `Litolfy Store (${sortedProducts.length} results)`;
  }, [sortedProducts.length]);

  // Add to cart function
  const handleAddToCart = (productTitle) => {
    setCartCount((previousCount) => previousCount + 1);
    setLastAdded(productTitle);
  };

  // Clear filters
  const handleClearFilters = () => {
    setSearchText("");
    setDebouncedSearch("");
    setCategory("All");
    setSortOrder("default");
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Litolfy Store</h1>
        <p>Discover your favorites at Litolfy!</p>
      </header>

      <main className="container">
        <div className="cart-info">
          <h2>Shopping Cart: {cartCount}</h2>

          {cartCount === 0 ? (
            <p>Your cart is currently empty.</p>
          ) : (
            <p>Last added: {lastAdded}</p>
          )}
        </div>

        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          category={category}
          setCategory={setCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          onClear={handleClearFilters}
        />

        <p className="result-count">
          Showing {sortedProducts.length} of {products.length} products
        </p>

        {sortedProducts.length === 0 ? (
          <p className="empty-message">
            No products found. Try a different keyword or category.
          </p>
        ) : (
          <div className="product-grid">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                inStock={product.inStock}
                onAddToCart={handleAddToCart}
              >
                {product.id === 1 && <span className="badge">Popular</span>}
                {product.id === 5 && <span className="badge">Featured</span>}
              </ProductCard>
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2026 Litolfy Store | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
