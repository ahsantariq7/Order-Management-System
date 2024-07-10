import React from 'react';
import './App.css';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';

function App() {
  return (
    <div className="App">
      <h1>Order Management System</h1>
      <OrderForm />
      <OrderList />
    </div>
  );
}

export default App;
