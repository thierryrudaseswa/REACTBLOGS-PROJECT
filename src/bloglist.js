import {Link} from "react-router-dom"

const BlogList= ({blogs,title,handleDelete}) => {
    
    return ( 
        <div className="blog-list">
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p>wirtten by {blog.author}</p>
            </Link>
            </div>
        ))}
        </div>
 
     );
}
 
export default BlogList;