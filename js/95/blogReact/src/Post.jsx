import { useEffect, useState } from "react";
import Comments from "./Comments";
import PropTypes from "prop-types";

export default function Post(props) {
    const [comments, setComments] = useState();
    const [commentsShowing, setCommentsShowing] = useState(false);

    const { post } = props;
    const { title, body, id } = post;

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
                if (!response.ok) {
                    throw new Error(`${response.status} - ${response.statusText}`);
                }
                const result = await response.json();
                setComments(result);
            }
            catch (e) {
                console.error(e);
            }
        })();
    }, [id])

    return (
        <div className="container post" key={id}>
            <h5>{title}</h5>
            <p>{body}</p> 
            {/*comments?.map(c => <Comments key={c.id} comments={c}/>)*/}
            <button onClick={() => setCommentsShowing(!commentsShowing)}>{`${!commentsShowing ? 'Show' : 'Hide'} Comments`}</button>
            {commentsShowing && comments?.map(c => <Comments key={c.id} comments={c}/>)}      
        </div>
    )
}
Post.propTypes = {
    post: PropTypes.object
}
