// dropdown for filtering accessibility features

import React from 'react';

export function FilterDropdown({ onApplyFilters }) {
    const [selectedFilters, setSelectedFilters] = React.useState({
      ADA: false,
      PP: false,
      PTowel: false,
      Changing: false,
    });
  
    const handleApply = () => {
      onApplyFilters(selectedFilters);
    };
  
    return (
      <div className="relative inline-block text-left">
        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Filter by Accessibility
          <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <label className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              <input type="checkbox" onChange={() => setSelectedFilters({ ...selectedFilters, ADA: !selectedFilters.ADA })} />
              ADA Accessible
            </label>
            <label className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              <input type="checkbox" onChange={() => setSelectedFilters({ ...selectedFilters, ADA: !selectedFilters.ADA })} />
              Period Products
            </label>
            <label className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              <input type="checkbox" onChange={() => setSelectedFilters({ ...selectedFilters, ADA: !selectedFilters.ADA })} />
              Changing Station
            </label>
            <label className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              <input type="checkbox" onChange={() => setSelectedFilters({ ...selectedFilters, ADA: !selectedFilters.ADA })} />
              Paper Towels
            </label>
          </div>
        </div>
      </div>
    );
  }
  