class PostList extends React.Component {
    state = {
        posts: []
    }
    fetchPosts = async ()=>{
        try{
            const response = await fetch()
            const fetchData =  await response.json()
            console.log(postData);
            this.setState({
                posts:postData
            })
        } catch(err){
            console.log(err);
        }
    }
} 
deletePost = (postId)=>{
    const index = this.state.posts.findIndex((post)=>{
        return post.id === postTd
    })

    console.log(index)
    const postCopy =[...this.state.posts]
    postCopy.splice(index,1)
    this.setState({
        posts:postCopy
    })
}
    render() {
        return <div>
        <button ocClick={()=>{this.fetchPosts()}}>Fetch </button>
        {this.state.posts.map(post=>{
            return <div key={post.id}>
                <p> Tittle-{post.title}</p>
                <button ocClick={()=>{this.deltePost(post.id)}}> </button>
            </div>
        })}
        <div/>
    }
    