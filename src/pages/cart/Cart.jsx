 
import { useSelector } from 'react-redux';
import CartEmpty from '../../components/cart/CartEmpty';
import CartList from '../../components/cart/CartList';
 

const Cart = () => {  
    const {carts} = useSelector(state => state.cart)
   
    return (
        <div className="cart-box">
           <div className="inner">
             {
                carts.length > 0 ? <CartList/> : <CartEmpty/>
             }
           </div>
        </div>
    );
};

export default Cart;