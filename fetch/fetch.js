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
} render