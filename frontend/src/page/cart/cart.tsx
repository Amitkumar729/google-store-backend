import React, { useEffect, useState } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Images {
    [key: string]: string[];
}

interface CartItem {
    model: string;
    color: string;
}

const Cart: React.FC = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const Images: Images = {
        peony: ["/phoneImages/peony3.png"],
        winterGreen: ["/phoneImages/winterGreen3.png"],
        porcelain: ["/phoneImages/porcelain3.png"],
        obsidian: ["/phoneImages/obsidian3.png"]
    };

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate("/login");
                    return;
                }

                const response = await axios.get('http://localhost:3000/cart', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setCartItems(response.data.items);
                setLoading(false);
            } catch (err: any) {
                if (err.response && err.response.status === 401) {
                    navigate("/login");
                }
                console.error('Error fetching cart items', err);
                setError('Failed to load cart items. Please try again.');
                setLoading(false);
            }
        };

        fetchCartItems();
    }, [navigate]);
console.log(cartItems)
    const handleNavigation = () => {
        navigate("/purchase");
    }

    if (loading) {
        return <div>Loading cart items...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="cart-container">
            <div className="cart-header"><h3>Cart List</h3></div>
            {cartItems.length === 0 ? (
                <div>Your cart is empty...</div>
            ) : (
                <div className="cart-list">
                    {cartItems.map((item, idx) => {
                        const imageUrl = Images[item.color.toLowerCase()]?.[0] || "/phoneImages/winterGreen3.png";
                        return (
                            <div key={idx} className="cart-wrapper">
                                <div className="cart-left">
                                    <img src={imageUrl} alt={`Product in ${item.color}`} />
                                </div>
                                <div className="cart-right">
                                    <div className="cart-text">Pixel 9</div>
                                    <div className="cart-text"><b>Color: </b>{item.color}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            {cartItems.length !== 0 ? (
                <div className="cart-button" onClick={handleNavigation}>Proceed to buy</div>
            ) : (
                <div>Please add something to the cart</div>
            )}
        </div>
    );
}

export default Cart;