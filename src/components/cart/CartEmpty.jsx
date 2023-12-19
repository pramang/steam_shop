import { CartEmptyWrap } from "./CartStyle";


const CartEmpty = () => {
    return (
        <CartEmptyWrap>
            <div className="inner">
            <h2>
                Your Cart is empty <br /> 
                Plz start shopping now!
            </h2>
            </div>
        </CartEmptyWrap>
    );
};

export default CartEmpty;