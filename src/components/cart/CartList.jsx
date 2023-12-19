import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { CartListWrap } from "./CartStyle";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { chkRemove, totalCart } from "../../store/modules/cartSlice";

const CartList = () => {
    const {cartTotal,carts} = useSelector(state => state.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()
 
    useEffect(()=>{
        dispatch(totalCart())
    },[carts])


    return (
        <CartListWrap>
            <h2>장바구니</h2>
            <div className="cart-list">
              {carts.map(item => <CartItem key={item.id} item={item}/>)}  
            </div>
            <div className="cart-bottom">
                <p><strong></strong>
                   <span>product-total:{carts.length} 개</span> 
                </p>                
                <p><strong></strong>
                   <span>TotalPrice:{cartTotal}$</span> 
                </p>
            </div>
            <button onClick={()=>navigate(`/product`)}>쇼핑하러가기</button>
            {/* <button >선택삭제</button> */}
        </CartListWrap>
    );
};

export default CartList;