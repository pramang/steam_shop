import { useDispatch, useSelector } from "react-redux";
import { CustomerLIstWrap } from "./CustomerStyle";
import CustomerItem from "./CustomerItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addData } from "../../store/modules/paginationSlice";

const CustomerLIst = () => {
   const {customerData} = useSelector(state => state.customer)
   const navigate = useNavigate()
   const { currPage, postsPerpage } = useSelector(state => state.pagination)
   const dispatch = useDispatch()
   const lastPost = currPage * postsPerpage // 1 * 10 => 10
   const firstPost = lastPost - postsPerpage ;
   const currentPosts = customerData.slice(firstPost,lastPost)
   
   useEffect(()=>{
    dispatch(addData(customerData))
   },[])

   
   return (
        <CustomerLIstWrap>
        <table className="customerTable">
        <caption>게시판</caption>
        <colgroup>
            <col className="num" />
            <col className="title" />               
            <col className="name" />               
            <col className="date" />               
        </colgroup>
        <thead>
            <tr>
                <th>번호</th>
                <th></th>              
                <th>작성자</th>
                <th>작성일</th>
            </tr>
        </thead>
        <tbody>
             {currentPosts.map(item => <CustomerItem key={item.id} item={item}/>)}
       </tbody>
       </table>
            <p><button onClick={()=>navigate('customeradd')}>글 작성</button></p>
       </CustomerLIstWrap>
    );
};

export default CustomerLIst;