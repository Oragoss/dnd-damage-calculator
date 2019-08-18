import React from 'react';
import DamageDisplayForm from '../organisms/DamageDisplayForm';
import Navbar from '../organisms/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <div className="empty-space"></div> */}
      <DamageDisplayForm />
    </React.Fragment>
  );
}

export default App;
