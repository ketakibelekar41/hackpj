import logo from './logo.svg';
import './App.css';
import { LogDetails } from './Components/LogDetails';
import { myContext } from './Components/LogDetails';

import { HackingPage } from './Components/HackingPage';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const [formData, setFormData] = useState(null)

  const handleFromSubmit = (data) => {
    setFormData(data)
  }
  return (
    <div className="App">
      <myContext.Provider value={formData}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LogDetails onFormSubmit={handleFromSubmit} />} />
            <Route path='/display' element={<HackingPage />} />
          </Routes>
        </BrowserRouter>
      </myContext.Provider>
    </div>
  );
}

export default App;
