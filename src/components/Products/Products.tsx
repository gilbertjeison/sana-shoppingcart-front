import { IProduct } from '../../models/product';
import Product from './Product';

import * as S from './style';

interface IProps {
  products: IProduct[];
}

const Products = ({ products }: IProps) => {
  return (
    <S.Container>
      {products?.map((p) => (
        <Product product={p} key={p.id} />
      ))}
    </S.Container>
  );
};

export default Products;
