import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import data from "../../constants/data.json"
import {Link} from "react-router-dom";


function blogPostDetail() {
    const {postId} = useParams();
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(data)

                const postIdNumber = Number(postId);

                const post = data.find(post => post.id === postIdNumber);

                if (post) {
                    setPostData(post);
                } else {
                    console.warn(`Blog post with id ${postIdNumber} not found`);
                }
                } catch (error) {
                console.error('Error fetching data:', error);
                }
        };
    fetchData();
    }, [postId]);

    return (
        <div>
            <h1>{postData ? postData.title : 'Er is geen blog gevonden'}</h1>
            <h2>{postData ? postData.subtitle : ""}</h2>
            <p>Geschreven door {postData ? postData.author : ""} op {postData ? postData.created : ''}</p>
            <p>{postData ? postData.content : 'Klik hier om terug te gaan naar de overzichtspagina'}</p>
            <p>{postData ? postData.comments : ''} reacties {postData ? postData.shares: ''} - keer gedeeld</p>
            <p> <Link className='to-all-posts' to='/alleposts'>Terug naar de overzichtspagina</Link> </p>

        </div>
    );
}
export default blogPostDetail