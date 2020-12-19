import React, { Component, useState } from 'react';

const PomodoroContext = React.createContext();

const PomodoroProvider = ({ children }) => {
  const [timeboxes, setTimeboxes] = useState([0.2, 5, 25, 5, 25, 5, 25, 15]);
  const [activeTimebox, setActiveTimebox] = useState(0);

  return (
    <PomodoroContext.Provider value={{ timeboxes, activeTimebox, setActiveTimebox }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContext;

export { PomodoroProvider };
