
import BlogList from "./bloglist";
import useFetch from "./useFetch";


const Home = () => {
    const {data:blogs,isPending,error} =useFetch('http://localhost:8000/blogs');
// const [name,setName]=useState("thierry");
// const [age,setAge]=useState(60)

//     const handleClick = (e) =>{
//         setName("CEO thierry");
//         setAge(640);}
    return ( 
         <div className="home">
            { error && <div>{ error }</div>}
             <h2>homepage of thierry</h2>
        {isPending && <div>loading by thierry ...</div>}
      {blogs && <BlogList blogs={blogs}  />
    
 }
            </div>
     );
}
 
export default Home;