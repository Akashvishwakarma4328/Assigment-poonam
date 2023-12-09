// App.jsx
import React, { useState, useEffect } from 'react';
import KanbanBoard from '../src/Component/KanbanBoard';
import Options from '../src/Component/Options';
import StatusCounts from '../src/Component/StatusCounts';
import './App.css';

const App = () => {
  const [data, setData] = useState({ tickets: [], users: [] });
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortOption, setSortOption] = useState('priority');
  const [displayOption, setDisplayOption] = useState('');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        const ticketsArray = Array.isArray(data.tickets) ? data.tickets : [];
        const usersArray = Array.isArray(data.users) ? data.users : [];

        setData({ tickets: ticketsArray, users: usersArray });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleGroupingChange = option => {
    setGroupingOption(option);
  };

  const handleSortChange = option => {
    setSortOption(option);
  };

  const handleDisplayChange = option => {
    setDisplayOption(option);
    setGroupingOption('status');
    setSortOption('priority');
  };

  return (
    <div className="app">
      <header>
        <Options
          displayOption={displayOption}
          groupingOption={groupingOption}
          sortOption={sortOption}
          onDisplayChange={handleDisplayChange}
          onGroupingChange={handleGroupingChange}
          onSortChange={handleSortChange}
        />
      </header>
      <main>
        <KanbanBoard
          tickets={data.tickets}
          users={data.users}
          groupingOption={groupingOption}
          sortOption={sortOption}
        />
      </main>
    </div>
  );
};

export default App;
