import React, { useEffect } from 'react';
import './App.css';
import * as S from './style';
import { useProducts } from '../../contexts/product-context';
import Loader from '../Loader';
import Products from '../Products/Products';
import Cart from '../Cart';

function App() {
  const { isFetching, products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  return (
    <S.Container>
      {isFetching && <Loader />}
      <S.Main>
        <S.MainHeader>
          <p>{products?.length} Product(s) found</p>
        </S.MainHeader>
        <Products products={products}/>
      </S.Main>      
      <Cart />
    </S.Container>    
  );
}

export default App;
