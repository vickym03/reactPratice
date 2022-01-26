
class PostDetail extends React.Component{
    render(){
        const {id,body,title,userId} = this.props.selectedPostData
        return <div>
            <p>id:{id}</p>
            <p>Body:{body}</p>  
            <p>Title:{title}</p>  
            <p>User Id:{userId}</p>
        </div>
    }
}


class PostList extends React.Component {
    state = {
        posts: [],
        showDetailPost :false,
        selectedPostData: null
    }
    fetchPosts = async ()=>{
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const postsData =  await response.json()
            console.log(postsData);
            this.setState({
                posts:postsData
            })
        } catch(err){
            console.log(err);
        }
    }

deletePost = (postId)=>{
    const index = this.state.posts.findIndex((post)=>{
        return post.id === postId
    })

    console.log(index)
    const postCopy =[...this.state.posts]
    postCopy.splice(index,1)
    this.setState({
        posts:postCopy
    })
}

displayDetailPost = (selectedPost) =>{
    this.setState({
        showDetailPost:true,
        selectedPostData:selectedPost
    })
    console.log(selectedPost)

}

render() {
    return <div style={{display:"flex",background:'lightgray'}}>
    <div>
    <button ocClick={()=>{this.fetchPosts()}}>Fetch </button>
    {this.state.posts.map(post=>{
        return <div key={post.id}>
            <p onClick={()=>{displayDetailPost(post)}}>Title - {post.title}</p>
            {/* <p> Tittle-{post.title}</p> */}
            <button ocClick={()=>{this.deletePost(post.id)}}>Delete </button>
        </div>
    })}
</div>

    <div>
        {this.state.showDetailPost?<PostDetail selectedPostData={this.state.selectedPostData}/>: null}
    </div>

</div>
}
    
}   
    ReactDOM.render(<PostDetail/>,document.getElementById("container"))