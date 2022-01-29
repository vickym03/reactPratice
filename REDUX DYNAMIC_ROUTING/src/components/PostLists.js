import axios from "axios";
import React, { useState,useEffect } from 'react';

function PostLists(props)
{
   const [posts,setposts] =  useState([])
   useEffect(()=>
   {
       fetchPosts()
   },[])

   const fetchPosts = async () =>
   {
       try{
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await axios.get(url)
            setposts(response.data)
       }catch(err)
       {
           console.log(err);

       }
   }

   const navigateToPostDetail = (postId) =>
   {
       props.history.push(`/posts/${postId}`)
   }

   return <div>
       {posts.map((post)=>{
           return <p key={post.id} 
                    onClick={()=>{navigateToPostDetail(post.id)}}>{post.title}</p>
       })}
   </div>
}

export default PostLists