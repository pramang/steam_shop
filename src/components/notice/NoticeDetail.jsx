import { useNavigate, useParams } from "react-router-dom";
import { NoticeDetailWrap } from "./NoticeStyle";
import { useSelector } from "react-redux";


const NoticeDetail = () => {
  const {noticeID} = useParams()
  const { noticedata } = useSelector(state => state.notice)
  const newItem = noticedata.find(item => item.id === Number(noticeID))
  const {id, title, content , date } = newItem
  const navigate = useNavigate()

    return (
        <NoticeDetailWrap>
          <div className="inner">
           
          <h2> {id}번째 {title} </h2>
            <div className="con">
            <h3>{title}</h3>
                <p className="txt"> {content}</p>
                <p className="date"> {date}</p>
            </div>
            <button onClick={()=>navigate(`/notice`)}>목록으로</button>
          </div>
        </NoticeDetailWrap>
    );
};

export default NoticeDetail;