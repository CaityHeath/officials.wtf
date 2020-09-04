import React from 'react';
import './App.css';

function App() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit clicked')
  }

  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
       <input type="text" className="address-input" placeholder="Address"/>
     </form>
    </div>
  );
}

export default App;
