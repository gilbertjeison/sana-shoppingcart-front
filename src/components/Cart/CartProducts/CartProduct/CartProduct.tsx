
import { useCart } from '../../../../contexts/cart-context';
import { ICartProduct } from '../../../../models/cart-product';
import formatPrice from '../../../../utils/formatPrice';
import * as S from './style';

interface IProps {
  product: ICartProduct;
}

const currencyId = 'USD';
const currencyFormat = '$';

const CartProduct = ({ product }: IProps) => {
  const { removeProduct, increaseProductQuantity, decreaseProductQuantity } =
    useCart();
  const {
    image,
    productName,
    description,
    price,
    style,
    quantity,
  } = product;

  const handleRemoveProduct = () => removeProduct(product);
  const handleIncreaseProductQuantity = () => increaseProductQuantity(product);
  const handleDecreaseProductQuantity = () => decreaseProductQuantity(product);

  return (
    <S.Container>
      <S.DeleteButton
        onClick={handleRemoveProduct}
        title="remove product from cart"
      />
      <S.Image
        src={require(`../../../../static/products/${image}`)}
        alt={productName}
      />
      <S.Details>
        <S.Title>{productName}</S.Title>
        <S.Desc>
          {`${description}`} <br />
          Quantity: {quantity}
        </S.Desc>
      </S.Details>
      <S.Price>
        <p>{`${currencyFormat}  ${formatPrice(price, currencyId)}`}</p>
        <div>
          <S.ChangeQuantity
            onClick={handleDecreaseProductQuantity}
            disabled={quantity === 1 ? true : false}
          >
            -
          </S.ChangeQuantity>
          <S.ChangeQuantity onClick={handleIncreaseProductQuantity}>
            +
          </S.ChangeQuantity>
        </div>
      </S.Price>
    </S.Container>
  );
};

export default CartProduct;
