import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>SOFA STUDIO</h1>
      <p>高質感沙發，為你的生活升級</p>
      <Link href="/products">查看沙發</Link>
    </div>
  );
}
