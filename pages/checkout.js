import { useCart } from '../lib/cartContext';

export default function Checkout() {
  const { cart } = useCart();
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div style={{ padding: 40 }}>
      <h1>結帳</h1>
      {cart.map((p, idx) => (
        <p key={idx}>{p.name} - NT$ {p.price}</p>
      ))}
      <h2>總金額：NT$ {total}</h2>
      <button onClick={() => alert('付款成功（測試）')}>付款</button>
    </div>
  );
}
