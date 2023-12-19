import { useDispatch, useSelector } from "react-redux";
import { cartsEdit, removeCart, totalCart } from "../../store/modules/cartSlice";
import { useEffect, useState } from "react";

 
const CartItem = ({item}) => {
  const {image,price,title,id} = item
  const dispatch = useDispatch()
  let [count, setCount] = useState(1)
  let [ischk, setIschk] = useState(true)
  let Ischeck = () => {
      setIschk(!ischk)
    }
  let countingPlus = () => {
    if(ischk){setCount(count + 1)}
  }

  let countingMinus = () => {
    if(count === 0) return
    if(ischk){setCount(count - 1)}
  }

  let countEdit = () => {
    dispatch(cartsEdit({id,count}))
  }
  
  useEffect(()=>{
    if(ischk){countEdit()}
  },[count])

    return (
        <article>
         {/*  <p>
            <input type="checkbox" onChange={Ischeck} checked={ischk} />
            <label htmlFor=""></label>
          </p> */}
          <img src={image}  alt={title} />
          <div>
            <h3>
              {title}
            </h3>
          </div>
          <p className="cnt">
            <button onClick={countingMinus}>-</button>
            <button onClick={countingPlus}>+</button>
            <span>{count}</span>
          </p>
          <p>
            <span>Total:{price}$</span>
          </p>
          <button onClick={()=>dispatch(removeCart(id))}>삭제</button>        
        </article>
    );
};

export default CartItem;