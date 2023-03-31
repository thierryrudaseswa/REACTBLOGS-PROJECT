import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create= ()=>{
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('thierry');
    const [isPending,setIsPending]=useState(false);
    const history =useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();

        const blog={title,body,author}
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            setIsPending(false);
            // history.go(-1);
            history.push('/')
        })
        
    }
    return( 
        <div className="Create">

   <h2>add a new blog</h2>
   <form onSubmit={handleSubmit}>
    <label>blog title:</label>
    <input
    type="text"
    require
    value={title}
    onChange={(e)=>setTitle(e.target.value)} 
    />
    <label>blog body:
    </label>
    <textarea
    required
    value={body}
    onChange={(e)=>setBody(e.target.value)}

    >
    </textarea>
    <label>blog author:</label>
    <select 
    value={author}
    onChange={(e)=>setAuthor(e.target.value)}>
        <option value="mario">mario</option>
        <option value="thierry">thierry</option>
    </select>
   {!isPending && <button>add blog</button>}
   {isPending && <button disabled>adding blog ....</button>}
    <p>{title}</p>
    <p>{body}</p>
    <p>{author}</p>
   </form>
        </div>
    );
}
export default Create;
