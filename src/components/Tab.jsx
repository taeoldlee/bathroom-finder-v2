// component for GenderTab
export function Tab({ label, isSelected, onClick }) {
  return (
    <button 
    className={`px-4 py-2 text-white ${isSelected ? 'bg-[#836eaa]' : 'bg-gray-400 hover:bg-gray-500'} focus:outline-none`}
      onClick={onClick} >
      {label}
    </button>
  );
}
