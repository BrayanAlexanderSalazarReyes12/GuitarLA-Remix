import Blogs from "./blogs"
export default function ListadoBlogs({blogs}) {
    return (
        <>
            <h2 className="heading">Blog</h2>
            <div className="blog">
                {blogs?.map( blog => (
                <Blogs
                    key = {blog.id}
                    blog = {blog.attributes}
                />
                ))}
            </div>
      </>
    )
}
