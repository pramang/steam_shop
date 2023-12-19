import { useDispatch, useSelector } from "react-redux";
import NoticeItem from "./NoticeItem";
import { NoticeListWrap } from './NoticeStyle';
import { useEffect } from "react";
import { addData } from "../../store/modules/paginationSlice";
 
const NoticeList = () => {
    const { noticedata } = useSelector(state => state.notice)
    const { currPage, postsPerpage } = useSelector(state => state.pagination)
    const dispatch = useDispatch()
    const lastPost = currPage * postsPerpage // 1 * 10 => 10
    const firstPost = lastPost - postsPerpage ;
    const currentPosts = noticedata.slice(firstPost,lastPost)
    // currpage = 1 1 ~ 10
    // currpage = 2 11 ~ 20
    // currpage = 3 21 ~ 30
    useEffect(()=>{
        dispatch(addData(noticedata))
    },[])

    return (
        <NoticeListWrap>
        <table className="noticeTable">
            <caption>게시판</caption>
            <colgroup>
                <col className="num" />
                <col className="title" />               
                <col className="date" />               
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>내용</th>
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
                  {
                    currentPosts.map(item => <NoticeItem key={item.id} item={item}/>)
                  }
           </tbody>
        </table>
        </NoticeListWrap>
    );
};

export default NoticeList;