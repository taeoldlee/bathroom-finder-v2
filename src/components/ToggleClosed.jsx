// component that handles showing closed bathrooms
import React from 'react';

export function ToggleClosed({ showClosed, onToggle }) {
  return (
    <div className='flex justify-center items-center py-2'>
      <label className="flex items-center cursor-pointer">
        <span className="mr-3">Show Closed Bathrooms?</span>
        <input 
          type="checkbox" 
          checked={showClosed} 
          onChange={onToggle} 
          className="form-checkbox h-5 w-5 text-[#836eaa] rounded"
        />
      </label>
    </div>
  );
}
