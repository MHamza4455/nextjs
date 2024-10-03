import { NextPage } from "next";

interface BlogsDetailPageProps {
    params: {
        slug: string;
    }
}

const BlogsDetailPage: NextPage<BlogsDetailPageProps> = ({ params }) => {
  return (
    <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">
            Welcome to Blogs Detail Page { params.slug }
        </h1>
    </div>
  );
};

export default BlogsDetailPage;