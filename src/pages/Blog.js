
import { useState, useRef, useEffect } from "react";
import styles from './Blog.module.css';
import Navbar from "../components/Navbar";


export default function Blog(){
    //i)Passing title and content as object inside formData
    const [formData, setFormData] = useState({title:"", content:""});
    const [blogs, setBlogs] = useState([]); //array of blogs
    
    //ii)Everytime the title of the first blog(the blog which is added last i.e blog[0])
    //should be the title of the whole React page
    useEffect(()=>{
        if(blogs.length && blogs[0].title){
            document.title=blogs[0].title;
        }
        else{//When empty blog is added or blog[0] is empty
            document.title="No blogs!!"
        }
    },[blogs]);

    //iii)To bring the focus back to the title field after adding a new blog,use useRef
    const titleRef=useRef(null);    
    //Everytime On re-rendering the app,to set the focus at title
    useEffect(()=>{
        titleRef.current.focus();
    },[]);
    
    //iv)After Submitting a new blog
    function handleSubmit(e){
        e.preventDefault();
        setBlogs([{title:formData.title, content:formData.content}, ...blogs]); //recent blogs is added at the front
        setFormData({title:"", content:""});//reset condition after adding a blog
        titleRef.current.focus();
    }

    //v) removeBlog function => Blogs=[B1,B2,B3,B4]
    function removeBlog(i){
        setBlogs(blogs.filter((blog,index) => i !== index));
    }



    return(
        <>
        <Navbar/>
        <h2 className={styles.h2}>Write a Blog!</h2>
        <div className={styles.section}>
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                    <input className={styles.input}
                           placeholder="Enter the title here ..."
                           value={formData.title}
                           ref={titleRef} //To bring the focus back to the title field 
                           onChange={(e)=>setFormData({title:e.target.value, content:formData.content})}
                    />
                </Row>
                <Row label="Content">
                    <textarea className={styles.content}
                              placeholder="Content goes here ..."
                              value={formData.content}
                              required
                              onChange={(e)=>setFormData({title:formData.title, content: e.target.value})}
                    />
                </Row>
                <button className={styles.btn}>ADD</button>
            </form>
        </div>

        <div className={styles.border}></div>


        {/* Section where submitted blogs will be displayed */}
        <h3>Blogs</h3>
        {blogs.map((blog,i)=>(
            <div className={styles.blog}>
                <h4 className={styles.h4}>{blog.title}</h4>
                <p className={styles.para}>{blog.content}</p>                
                {/*Adding delete button on every blog */}
                <div className={styles.blog_btn}>
                    <button onClick={()=>removeBlog(i)} className={styles.btn_remove}> Delete</button>
                </div>
            </div>
        ))}
        </>
    );
}


function Row(props){
    const {label} = props;
    return(
        <>
        <label> {label}  <br/></label>
        {props.children}
        <hr />
        </>
    )
}