import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const result = await axios.get('http://127.0.0.1:8000//api/orders/');
            setOrders(result.data);
        };
        fetchOrders();
    }, []);

    return (
        <div>
            <h2>Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        Customer: {order.customer_name}, Amount: {order.total_amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
