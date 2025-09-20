export default function BlogCard({ title, description }) {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}