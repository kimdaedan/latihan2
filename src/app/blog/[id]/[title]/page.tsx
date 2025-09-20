import BlogCard from "./components/BlogCard";

interface BlogDetailProps {
  params: {
    id: string;
    title: string;
  };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  return (
    <div>
      <BlogCard id={params.id} title={params.title} />
    </div>
  );
}