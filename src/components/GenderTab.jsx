// Component that handles bathroom gender selection
import { Tab } from './Tab';

export function GenderTab({ selected, onSelect }) {
  const handleTabClick = (gender) => {
    onSelect(gender);
  };

  return (
    <div className='flex justify-center items-center py-2'>
      <Tab 
        label="All Gender" 
        isSelected={selected === 'All Gender'} 
        onClick={() => handleTabClick('All Gender')}
      />
      <Tab 
        label="Mens" 
        isSelected={selected === 'Mens'} 
        onClick={() => handleTabClick('Mens')}
      />
      <Tab 
        label="Womens" 
        isSelected={selected === 'Womens'} 
        onClick={() => handleTabClick('Womens')}
      />
    </div>
  );
}
