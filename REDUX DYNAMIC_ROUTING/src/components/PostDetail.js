import axios from "axios";
import React, { useState,useEffect } from 'react';

function PostDetail(props)
{
    const [detailPost, setDetailPost] = useState({})
    useEffect(()=>
    {
        console.log(props);
        console.log(props.match.params.postId);
        fetchDetailPost()
    },[])

    const fetchDetailPost = async () =>
    {
        const postId = props.match.params.postId    
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        try{
            
            const response = await axios.get(url)
            setDetailPost(response.data)
        }catch(err)
        {
            console.log(err);
        }
    }
    return <div>
        <p> Title - {detailPost.title}</p>
        <p> ID - {detailPost.id}</p>
        <p> Body - {detailPost.body}</p>
        <p> userID - {detailPost.userId}</p>
    </div>
}
export default PostDetail