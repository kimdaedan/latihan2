
interface BlogCardProps {
  id: string | number;
  title: string;
}

export default function BlogCard({ id, title }: BlogCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
      <h2>{title}</h2>
      <p>Ini adalah detail untuk konten dengan ID: {id}</p>
    </div>
  );
}