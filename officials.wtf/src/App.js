import React from 'react';
import superagent from 'superagent'
import './App.css';

function App() {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = 'http://localhost:3000'
    let address = e.target.userAddress.value
    let data = await superagent.get(`${url}/findreps`).query({ data: address });
    console.log(data);
  }

  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
       <input type="text" className="address-input" placeholder="Address" name="userAddress"/>
     </form>
    </div>
  );
}

export default App;
