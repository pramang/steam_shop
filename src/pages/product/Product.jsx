import ProductSearch from '../../components/product/ProductSearch';
import { ProductWrap } from './ProductStyle';
import ProductItem from '../../components/product/ProductItem';
import { useSelector } from 'react-redux';

const Product = () => {
  let {products} = useSelector(state => state.cart)

    return (
      <ProductWrap>
        <div className="inner">
        <h2>Steam shop</h2>

        <ProductSearch />

        <div className="cart-box">
                    {
                      products.map(item => <ProductItem key={item.id} item={item}/>)
                    }
        </div>

        </div>
      </ProductWrap>
    );
};

export default Product;