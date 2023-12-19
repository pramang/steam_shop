import { AboutWrap } from "./AboutStyle";
import { FaCheck } from "react-icons/fa";
const About = () => {
    return (
        <AboutWrap>
            <div className="inner">
                <video src="/images/Steam Winter Sale 2023 Official Trailer.mp4" autoPlay loop>
                </video>
                <h2>Steam shop</h2>
                <h3>스택</h3>
                <h3>현재 미완성</h3>
                <ul>
                    <li><span>Product:제품페이지</span></li>
                    <li><span>Notice:공지사항 게시판</span></li>
                    <li><span>Customer:고객문의 게시판</span></li>
                    <li><span>Cart:장바구니</span></li>
                </ul>
                <span style={{marginTop:'30px'}}>
                <FaCheck /> React
                <FaCheck /> Styled-Components
                <FaCheck /> Router 
                <FaCheck /> Redux-toolkit
                </span>
                <span>기간 : 2023-12-10 ~ 2023-12-18</span>
             </div>
        </AboutWrap>
    );
};
export default About;