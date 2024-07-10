import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [totalAmount, setTotalAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000//api/orders/', {
                customer_name: customerName,
                total_amount: totalAmount
            });
            // Optionally handle success message or redirect
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Customer Name" />
            <input type="number" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} placeholder="Total Amount" />
            <button type="submit">Create Order</button>
        </form>
    );
};

export default OrderForm;
