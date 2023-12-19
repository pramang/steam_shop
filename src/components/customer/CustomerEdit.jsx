import { useDispatch, useSelector } from "react-redux";
import { CustomerAddWrap } from "./CustomerStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { update } from "../../store/modules/customerSlice";

const CustomerEdit = () => {
    let {current} = useSelector(state => state.customer)
    let [user, setUser] = useState(current)
    let {name, title, content ,date} = user
    let [now , setNow] = useState(new Date())
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const changeInput = e => {
        const {name , value} = e.target
        setUser({
            ...user,
            [name]:value
        })

    }
    const onSubmit = e => {
        e.preventDefault()
        if(!title || !content || !name) return
        date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
        dispatch(update(user))
        setUser({name:'',content:'',title:''})
        navigate(`/customer`)
    }
    const onGo = (e) => {
        e.preventDefault()
        navigate(`/customer`)
    }

    return (
        <CustomerAddWrap>
            <div className="inner">
                <h2> 고객문의수정 </h2>
                <form  className="customer-add" onSubmit={onSubmit}>
                    <p>  <input type="text" placeholder="제목" onChange={changeInput} name="title" value={title} /></p>
                    <p>  <input type="text" placeholder="작성자" onChange={changeInput} name="name" value={name}/></p>
                    <p>  
                        <textarea cols="100" rows="10" 
                        placeholder="문의하기" 
                        onChange={changeInput} name="content" value={content}
                        ></textarea></p>
                    <p>
                        <button onClick={onGo}>목록으로</button>
                        <button type="submit">저장하기</button>
                        <button onClick={onGo}>취소하기</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerEdit;