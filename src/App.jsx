import React from 'react';
import NotchHeader from './components/NotchHeader/NotchHeader';

function App() {
  return (
    <div className="app-layout">
      {/* The Notch Header Component sits at the top */}
      <NotchHeader />
      
      {/* Placeholder content to demonstrate the layout below */}
      <main style={{ padding: '2rem', color: '#fff' }}>
        <h1>Dashboard</h1>
        <p>Content goes here...</p>
      </main>
    </div>
  );
}

export default App;