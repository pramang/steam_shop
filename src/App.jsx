import {  BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import GlobalStyle from "./styled/GlobalStyle"
import Layout from "./components/Layout";
import NotFiles from "./components/notfile/NotFiles";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Logout from "./pages/login/Logout";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/cart";
import Notice from "./pages/notice/Notice";
import Customer from "./pages/customer/Customer";
import NoticeDetail from "./components/notice/NoticeDetail";
import About from "./pages/about/About";
import CustomerDetail from "./components/customer/CustomerDetail";
import CustomerAdd from "./components/customer/CustomerAdd";
import CustomerEdit from "./components/customer/CustomerEdit";
 

const App = () => {
  return (
    <>
    <BrowserRouter>
        <GlobalStyle /> 
        <Routes>
          <Route path="/" element={<Layout/> }>
          <Route index element={<Main />}/>
          <Route path="/join" element={<Main />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/cart" element={<Cart />}/>

          <Route path="/notice">
            <Route index element={<Notice/>}></Route>
            <Route path=":noticeID" element={<NoticeDetail />}></Route>
          </Route>
          
          <Route path="/customer">
          <Route index element={<Customer/>}></Route>
            <Route path=":customerID" element={<CustomerDetail/>}></Route>
            <Route path="customeradd" element={<CustomerAdd/>}></Route>
            <Route path="customeredit" element={<CustomerEdit/>}></Route>
          </Route>
          
          </Route>
        
          {/* <Route path="*" element={<NotFiles />}/> */}
        </Routes>
     </BrowserRouter>
    </>
  );
};

export default App;