import { useRouter } from 'next/router';
import { useCart } from '../../lib/cartContext';

export default function Product() {
  const { id } = useRouter().query;
  const { addToCart } = useCart();

  const product = { id, name: '北歐三人座沙發', price: 29800 };

  return (
    <div style={{ padding: 40 }}>
      <h1>{product.name}</h1>
      <p>NT$ {product.price}</p>
      <button onClick={() => addToCart(product)}>加入購物車</button>
    </div>
  );
}
