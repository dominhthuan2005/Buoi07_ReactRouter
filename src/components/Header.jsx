import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../lib/assets';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  // The PDF/Visily mock uses the same "app" header (recipe box + avatar) across pages.
  const isLoggedIn = true;

  useEffect(() => {
    // Preserve query when the user lands on recipes.
    if (location.pathname.startsWith('/recipes')) {
      const query = new URLSearchParams(location.search).get('q') || '';
      setSearchValue(query);
    }
  }, [location.pathname, location.search]);

  function submitSearch() {
    const trimmed = searchValue.trim();
    if (!trimmed) return navigate('/recipes');
    navigate(`/recipes?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <header className="w-full bg-white flex items-center justify-between px-8 py-4 border-b border-gray-100 z-50">
       <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
             <img src={assets.logo} alt="Chefify" className="h-8 w-auto" />
          </Link>
          <div className="relative ml-4">
             <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
             </div>
             <input
               type="text"
               value={searchValue}
               onChange={(e) => setSearchValue(e.target.value)}
               onKeyDown={(e) => {
                 if (e.key === 'Enter') submitSearch();
               }}
               placeholder="cakescascsa..."
               className="w-[300px] bg-gray-100 rounded-xl py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary-200 transition-shadow text-sm text-gray-700"
             />
          </div>
       </div>

       <nav className="flex items-center gap-6 text-sm font-medium text-gray-500">
           <Link to="/recipes" className="hover:text-primary-500 transition-colors">What to cook</Link>
           <Link to="/recipes" className="hover:text-primary-500 transition-colors">Recipes</Link>
           <Link to="/recipes" className="hover:text-primary-500 transition-colors">Ingredients</Link>
           <Link to="/recipes" className="hover:text-primary-500 transition-colors">Occasions</Link>
           <Link to="/about" className="hover:text-primary-500 transition-colors">About Us</Link>
       </nav>

       <div className="flex items-center gap-4">
          {isLoggedIn ? (
             <>
               <Link to="/recipe-box" className="px-4 py-2 bg-primary-150 text-primary-500 font-semibold rounded-lg flex items-center gap-2 hover:bg-primary-200 transition-colors text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>
                  Your Recipe Box
               </Link>
               <img src={assets.avatar} alt="Profile" className="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100" />
             </>
          ) : (
             <>
               <Link to="/auth" state={{ showLogin: true }} className="px-5 py-2.5 text-primary-500 font-semibold bg-primary-150 rounded-xl hover:bg-primary-200 transition-colors text-sm">Login</Link>
               <Link to="/subscribe" className="px-5 py-2.5 bg-primary-650 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors shadow-md text-sm">Subscribe</Link>
             </>
          )}
       </div>
    </header>
  );
}
