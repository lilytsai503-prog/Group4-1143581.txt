import { useCart } from '../lib/cartContext';
import Link from 'next/link';

export default function Cart() {
  const { cart } = useCart();
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div style={{ padding: 40 }}>
      <h1>購物車</h1>
      {cart.length === 0 ? <p>購物車空空的</p> : null}
      {cart.map((p, idx) => (
        <div key={idx}>
          <p>{p.name} - NT$ {p.price}</p>
        </div>
      ))}
      <h2>總金額：NT$ {total}</h2>
      <Link href="/checkout"><button>前往結帳</button></Link>
    </div>
  );
}
