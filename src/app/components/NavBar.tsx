"use client"
import React, { useState, useEffect } from 'react'
import { NavigationMenuDemo } from './NavMenu'
import Link from 'next/link'
import SearchComponent from './search'
import { Product } from '../../../types/products'
import { allProducts } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'

const NavBar = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch all products 
  useEffect(() => {
    const fetchProducts = async () => {
      const response : Product[] = await client.fetch(allProducts);  
      setProducts(response);
      setFilteredProducts(response); 
    };
    
    fetchProducts();
  }, []);

  // Handle search query change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    filterProducts(e.target.value);
  };

  // Filter products based on the search query
  const filterProducts = (query: string) => {
    if (query.trim() === '') {
      setFilteredProducts(products);  // Show all products when the search bar is empty
    } else {
      const filtered = products.filter((product) =>
        product.slug.current.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <div className="navbar bg-myColor4">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-myColor4 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link href={'/'}>Home</Link></li>
              <li>
                <Link href={'/product'}>Product</Link>
                <ul className="p-2">
                  <li><Link href='/shirt'>Shirt</Link></li>
                  <li><Link href={'/pant'}>Pants</Link></li>
                  <li><Link href={'/shoes'}>Shoes</Link></li>
                  <li><Link href={'/accesories'}>Accessories/Jewelleries</Link></li>
                </ul>
              </li>
              <li><Link href={'/about'}>About</Link></li>
              <li><Link href={'/contact'}>Contact</Link></li>
            </ul>
          </div>
          <Link href={'/'}><h1 className="btn btn-ghost text-lg font-extrabold  md:text-xl lg:text-2xl xl:text-3xl py-2 px-4">MensApparel</h1></Link>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <NavigationMenuDemo/>
        </div>
        
        <div className="navbar-end">
          <SearchComponent 
            value={searchQuery}
            onChange={handleSearchChange} 
            products={filteredProducts} // Pass filtered products to display
          />
          <div className="flex-none">
            <Link href="/cart">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
