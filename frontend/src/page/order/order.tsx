import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './order.css';

interface Item {
    model: string;
    color: string;
}

interface OrderData {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    items: Item[];
}


interface Images {
    [key: string]: string[];
}

const Order: React.FC = () => {
    const [orders, setOrders] = useState<OrderData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();


    const Images: Images = {
        peony: ["/phoneImages/peony3.png"],
        winterGreen: ["/phoneImages/winterGreen3.png"],
        porcelain: ["/phoneImages/porcelain3.png"],
        obsidian: ["/phoneImages/obsidian3.png"]
    };

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate("/login");
                    return;
                }

                const response = await axios.get('http://localhost:3000/orders', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setOrders(response.data);
                setLoading(false);
            } catch (err: any) {
                if (err.response && err.response.status === 401) {
                    navigate("/login");
                }
                console.error("Error fetching order data:", err);
                setError('Failed to load order data. Please try again later.');
                setLoading(false);
            }
        };

        fetchOrderData();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!orders || orders.length === 0) {
        return <div>No order data available.</div>;
    }

    return (
        <div className="user-profile-container">
            <h1>Order History</h1>
            {orders.map((order) => (
                <div key={order._id} className="order-card">
                    <div className="user-info-section">
                        <h4>Order ID: {order._id}</h4>
                        <div className="user-info">
                            <p><strong>Name:</strong> {order.name}</p>
                            <p><strong>Email:</strong> {order.email}</p>
                            <p><strong>Phone:</strong> {order.phone}</p>
                            <p><strong>Address:</strong> {order.address}</p>
                        </div>
                    </div>
                    <div className="items-section">
                        <h3>Order list</h3>
                        <div className="cart-list">
                            {order.items.map((item, idx) => {
                                const imageUrl = Images[item.color.toLowerCase()]?.[0] || "/phoneImages/winterGreen3.png";
                                return (
                                    <div key={idx} className="cart-wrapper">
                                        <div className="cart-left">
                                            <img src={imageUrl} alt={`Product in ${item.color}`} />
                                        </div>
                                        <div className="cart-right">
                                            <div className="cart-text">Pixel</div>
                                            <div className="cart-text"><b>Color: </b>{item.color}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Order;
