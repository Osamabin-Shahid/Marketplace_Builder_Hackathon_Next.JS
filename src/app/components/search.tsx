import React, { useState } from 'react'
import Link from 'next/link'
import { Product } from '../../../types/products'

interface SearchComponentProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  products: Product[]; 
}

const SearchComponent: React.FC<SearchComponentProps> = ({ value, onChange, products }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Open dropdown on hover
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  // Close dropdown on mouse leave
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); 
  };

  // Limit the list to 5 items
  const filteredProducts = products.slice(0, 5);

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for products..."
        className="input input-bordered w-full max-w-xs"
        onFocus={() => setIsDropdownOpen(true)}  // Open dropdown when focused
        onBlur={() => setIsDropdownOpen(false)}  // Close dropdown when input loses focus
      />
      {value && filteredProducts.length > 0 && isDropdownOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg z-10"
          onMouseEnter={handleMouseEnter} // Keep dropdown open while hovering
          onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves
        >
          <ul>
            {filteredProducts.map((product) => (
              <li key={product._id} className="p-2 hover:bg-gray-200">
                <Link href={`/productList/${product.slug.current}`} passHref>
                  <Link href={ `/productList/${product.slug.current}`} className="block">{product.productName}</Link>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
