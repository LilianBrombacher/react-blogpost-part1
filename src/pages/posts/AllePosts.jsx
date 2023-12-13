import posts from '../../constants/data.json';
import './AllePosts.css'
import { Link } from 'react-router-dom'

function AllePosts () {
    const totalPosts= posts.length
    console.log(posts)
    return (
        <>
        <main className='outer-container'>
            <h1>{totalPosts} posts</h1>
            <ul className='posts'>
                {posts.map((post, index) => (
                    <li className='posts-short' key={index}>
                        <p> <Link to='/alleposts/:postId'> {post.title} ({post.author})</Link></p>
                        <p>{post.comments} reacties  -  {post.shares} keer gedeeld</p>
                    </li>
                ))}
            </ul>
        </main>
        </>
    )

}

export default AllePosts