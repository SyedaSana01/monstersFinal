import React, { useState } from 'react';
import CardList from './components/card-list.jsx';
import SearchBox from './components/search-box';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([
    { name: 'rakshash', id: 1 },
    { name: 'kala', id: 2 },
    { name: 'bhulla', id: 3 },
    { name: 'ghatiya', id: 4 },
  ]);
  const [searchField, setSearchField] = useState('');
  const [user, setUser] = useState({ name: '', id: 0 });

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const changeUser = () => {
    const randomMonster = monsters[Math.floor(Math.random() * monsters.length)];
    setUser(randomMonster);
  };

  return (
    <div>
      <SearchBox
        className='monsters-search-box'
        type="search"
        placeholder="search monsters"
        setSearchField={setSearchField}
      />
     
      <div>
        <h1>{user.name}</h1>
        
      </div>
      
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;


