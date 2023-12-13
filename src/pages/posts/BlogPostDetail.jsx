import {useParams} from "react-router-dom";

function blogPostDetail() {
    const { postId } = useParams();

    return (
        <div>
            <h1>{postId}</h1>
            <p>Dit is de inhoud van blogpost {postId}</p>
        </div>
    );
}
export default blogPostDetail