"use client"

const FiltersSection = ({ priceRange, sortBy, handlePriceRangeChange, handleSortChange }) => {
  return (
    <section className="relative py-6 bg-gray-50 border-b">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div>
              <label htmlFor="min-price" className="block text-sm font-medium mb-1">
                Min Price
              </label>
              <select id="min-price" className="input py-2" value={priceRange[0]} onChange={handlePriceRangeChange}>
                <option value="0">₹0</option>
                <option value="100">₹100</option>
                <option value="200">₹200</option>
                <option value="300">₹300</option>
                <option value="500">₹500</option>
              </select>
            </div>
            <div>
              <label htmlFor="max-price" className="block text-sm font-medium mb-1">
                Max Price
              </label>
              <select id="max-price" className="input py-2" value={priceRange[1]} onChange={handlePriceRangeChange}>
                <option value="500">₹500</option>
                <option value="1000">₹1000</option>
                <option value="1500">₹1500</option>
                <option value="2000">₹2000</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="sort-by" className="block text-sm font-medium mb-1">
              Sort By
            </label>
            <select id="sort-by" className="input py-2" value={sortBy} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FiltersSection
