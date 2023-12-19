import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import posts from "../../constants/data.json"
import {Link} from "react-router-dom";
import formatDateString from "../../helpers/FormatDateString.jsx";


function blogPostDetail() {
    const {postId} = useParams();
    const [postData, setPostData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             console.log(data)
    //
    //             const postIdNumber = Number(postId);
    //
    //             const post = data.find(post => post.id === postIdNumber);
    //
    //             if (post) {
    //                 setPostData(post);
    //             } else {
    //                 console.warn(`Blog post with id ${postIdNumber} not found`);
    //             }
    //             } catch (error) {
    //             console.error('Error fetching data:', error);
    //             }
    //     };
    // fetchData();
    // }, [postId]);

    const {title, readTime, subtitle, author, created, content, comments, shares} = posts.find((post) => {
        return post.id.toString() === postId;
    });

    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>Geschreven door {author} op {formatDateString(created)}</p>
            <p>{readTime} minuten lezen</p>
            <p>{content}</p>
            <p>{comments} reacties {shares} - keer gedeeld</p>
            <p> <Link className='to-all-posts' to='/alleposts'>Terug naar de overzichtspagina</Link> </p>

        </div>
    );
}
export default blogPostDetail