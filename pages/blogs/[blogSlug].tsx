import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

import Layout from "../../components/layout/layout";
// import { getBlogsApi } from "../../services/blogs";
interface BlogDetailsType {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  content: string;
}

const Blog = ({ title, date, content }: BlogDetailsType) => {
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (descriptionRef.current !== null) {
      descriptionRef.current.innerHTML = content;
    }
  }, [content]);
  return (
    <Layout variant="l3" title="Blogs">
      <Box
        sx={{
          width: "95%",
          maxWidth: "1024px",
          margin: "auto",
          marinTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <h1>{title}</h1>
        <span>{date}</span>
        <Box sx={{ marginTop: "3rem", lineHeight: "1.5" }}>
          <div ref={descriptionRef}></div>
        </Box>
      </Box>
    </Layout>
  );
};
// const getBlogs = async () => {
// const response: any = await getBlogsApi(false, 999, 0);
// return await response.data.blogs;
// };

// export async function getStaticPaths() {
// const blogs: any = await getBlogs();
// const slugs = blogs.map((item: { slug: string }) => item.slug);
// const pregeneratedPaths = slugs.map((item: string) => {
//   return { params: { blogSlug: item.toString() } };
// });
// return {
//   paths: pregeneratedPaths,
//   fallback: true,
// };
// }
// export async function getStaticProps() {
// context: {
// params: { blogSlug: string };
// }
// const blogSlug = context.params.blogSlug;
// interface blogDataType {
//   id: number;
//   title: string;
//   date: string;
//   description: string;
//   image: string;
//   slug: string;
//   content: string;
// }
// const blogData = await getBlogs();
// const blog = blogData.find((item: blogDataType) => item.slug === blogSlug);
// if (!blog) {
//   return {
//     notFound: true,
//   };
// }
// return {
//   props: {
//     ...blog,
//   },
//   revalidate: 10,
// };
// }

export default Blog;
