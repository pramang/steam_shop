import React, { useEffect, useRef, useState } from 'react';
import { ProductSearchWrap } from './ProductStyle';
import { useDispatch } from 'react-redux';
import { resetCart, searchCart, sortCart } from '../../store/modules/cartSlice';
const ProductSearch = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const textRef = useRef()
    const onSort = (e) => {
        e.preventDefault();
        const {value} = e.target;
        dispatch(sortCart(value))}
    const changeInput = e => {
        const {value} = e.target
        setText(value)}
    const onSubmit = e => {
        e.preventDefault()
        if(!text) return
        dispatch(searchCart(text))
        textRef.current.focus()    }
    useEffect(()=>{
        dispatch(searchCart(''))    },[])
    return (
        <ProductSearchWrap>
            <form onSubmit={onSubmit}>
                <p>
                    <input type="text" value={text} onChange={changeInput} ref={textRef}/>
                    <button type='submit'>검색</button>    
                </p>
                <p>
                    <select onChange={onSort}>
                        <option value="">상품 정렬</option>
                        <option value="title">제품명</option>
                        <option value="price">가격</option>
                    <option value="category">카테고리</option>
                    </select>
                    <span onClick={()=>dispatch(resetCart())}>초기화</span>
               </p>
            </form>
        </ProductSearchWrap>
    );
};
export default ProductSearch;