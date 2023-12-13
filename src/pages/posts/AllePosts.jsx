import posts from '../../constants/data.json';
import './AllePosts.css'

function AllePosts () {
    console.log(posts)
    return (
        <>
        <main className='outer-container'>
            <h1>Alle posts</h1>
            <ul className='posts'>
                {posts.map((post) => (
                    <li className='posts-short' key={post.id}>
                        <p>{post.title} ({post.author})</p>
                        <p>{post.comments} reacties  -  {post.shares} keer gedeeld</p>
                    </li>
                ))}
            </ul>
        </main>
        </>
    )

}

export default AllePosts