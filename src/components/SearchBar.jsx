import "./SearchBar.css";
function SearchBar({
  searchText,
  setSearchText,
  category,
  setCategory,
  sortOrder,
  setSortOrder,
  onClear,
}) {
  return (
    <div className="search-bar">
      <div className="search-group">
        <label htmlFor="search">Search Products</label>
        <input
          id="search"
          type="text"
          placeholder="Search by product name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="search-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="School Supplies">School Supplies</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <div className="search-group">
        <label htmlFor="sortOrder">Sort By</label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      <button
        type="button"
        className="clear-button"
        onClick={onClear}
      >
        Clear Filters
      </button>
    </div>
  );
}

export default SearchBar;
