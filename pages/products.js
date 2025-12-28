import Link from 'next/link';

const sofas = [
  { id: 1, name: '北歐三人座沙發', price: 29800 },
  { id: 2, name: 'L 型布沙發', price: 42800 }
];

export default function Products() {
  return (
    <div style={{ padding: 40 }}>
      <h1>所有沙發</h1>
      {sofas.map(s => (
        <div key={s.id}>
          <h3>{s.name}</h3>
          <p>NT$ {s.price}</p>
          <Link href={`/products/${s.id}`}>查看</Link>
        </div>
      ))}
    </div>
  );
}
