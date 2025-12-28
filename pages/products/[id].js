import { useRouter } from 'next/router';

export default function Sofa() {
  const { id } = useRouter().query;

  return (
    <div style={{ padding: 40 }}>
      <h1>沙發編號 {id}</h1>
      <p>可客製尺寸與顏色</p>
      <button
  onClick={() => alert('已加入購物車（示意）')}
>
加入購物車
</button>
    </div>
  );
}
