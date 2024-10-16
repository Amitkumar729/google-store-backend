import React, { useState } from 'react';
import './searchBar.css';

interface PhoneModel {
  id: number;
  name: string;
}

const phoneModels: PhoneModel[] = [
  { id: 1, name: 'iPhone 13' },
  { id: 2, name: 'Samsung Galaxy S22' },
  { id: 3, name: 'Google Pixel 6' },
  { id: 4, name: 'OnePlus 9 Pro' },
  { id: 5, name: 'Huawei P40 Pro' },
  { id: 6, name: 'Redmi Mi 11 Ultra' },
  { id: 7, name: 'Oppo Find X3 Pro' },
  { id: 8, name: 'Vivo X60 Pro' },
  { id: 9, name: 'Sony Xperia 1 III' },
  { id: 10, name: 'LG G8X ThinQ' },
  { id: 11, name: 'Motorola Razr' },
  { id: 12, name: 'Nokia 8.3 5G' },
  { id: 13, name: 'Redmi U20 5G' },
  { id: 14, name: 'Samsung Galaxy Note 20 Ultra' },
  { id: 15, name: 'Google Pixel 5' },
  { id: 16, name: 'iPhone 12 Pro' },
  { id: 17, name: 'OnePlus 8T' },
  { id: 18, name: 'Huawei Mate 40 Pro' },
  { id: 19, name: 'Xiaomi Redmi Note 10 Pro' },
  { id: 20, name: 'Oppo Reno Ace 2' },
];

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showList, setShowList] = useState(false);
  const [filteredModels, setFilteredModels] = useState(phoneModels);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredModels = phoneModels.filter((model) => model.name.toLowerCase().includes(searchTerm));
    setFilteredModels(filteredModels);
    if (searchTerm !== '') {
      setShowList(true);
    } else {
      setShowList(false);
    }
  };

  return (
    <div className="search-bar">
      <input
      className='search-input'
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a phone model"
      />
      {showList && (
        <ul>
          {filteredModels.map((model) => (
            <li key={model.id}>{model.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;