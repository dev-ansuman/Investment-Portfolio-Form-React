import React from 'react';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import Navbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Form />
        <Table />
      </div>
    </>
  );
};

export default App;
