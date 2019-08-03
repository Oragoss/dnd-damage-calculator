import React from 'react';
import DamageDisplayForm from '../organisms/DamageDisplayForm';
import Navbar from '../organisms/Navbar';

//I'm not sure I understand the point of a template
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <DamageDisplayForm />
    </React.Fragment>
  );
}

export default App;
