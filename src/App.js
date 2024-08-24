import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomAppBar from './Component/Appbar/Appbar';
import ShoeGrid from './Component/Cardsgrid/Cardsgrid';
import ShoeDetail from './Component/Shoedetail/ShoeDetail'; 

function App() {
  return (
    <Router>
      <div>
        <CustomAppBar />
        <main>
          <Routes>
            <Route path="/" element={<ShoeGrid />} />
            <Route path="/shoe/:shoeId" element={<ShoeDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
