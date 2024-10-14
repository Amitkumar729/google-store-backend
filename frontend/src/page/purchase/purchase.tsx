import React from "react";
import PurchaseForm from "../../components/form/form";
// import Cart from "../cart/cart";

const Purchase: React.FC = () => {

    return (
        <div className="purchase-container" >
            
            <div className="purchase-wrapper">
                <PurchaseForm/>
            </div>
        </div>
    )
}

export default Purchase;