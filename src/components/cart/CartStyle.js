import styled from 'styled-components'

export const CartListWrap = styled.div`
.inner {}
h2 {}
.cart-list {width: 100%;  
}
article { display: flex; border: 1px solid #000; align-items: center; justify-content: space-between; margin-bottom: 15px; padding: 10px; font-size: 20px; width: 100%; 
img { width: 120px; }
div { display: flex; width: 60%; h3 {margin-right: 30px; }}
button { width: 150px; border: 1px solid #000; height: 50px; transition: 0.3s; &:hover {background: blue; color:#fff}}
.cnt {display:flex; span{display:block;width:50px ;background:blue; color:#fff ;text-align: center; padding:5px} button{width:50px} align-items:center;}
}

.cart-bottom { margin-top: 50px; display: flex; font-size: 18px;
p{strong { margin-right: 20px;}}} 
button {width: 300px; height: 40px; background: #000; color:#fff } 
`
export const CartEmptyWrap = styled.div`
.inner {position: relative; h2 { font-size: 60px; margin-top:200px}}
a {width: 250px; background: #000; display: inline-block; height: 50px; line-height: 50px; color:#fff}

`