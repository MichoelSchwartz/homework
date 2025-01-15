import PropTypes from "prop-types";

export default function Comments(props) {
  const {comments} = props;
  const {name, email, body} = comments;

  return (
    <div className="container comment">
      <h5>{name}</h5>
      <h5>{email}</h5>
      <p>{body}</p>
    </div>
  )
}
Comments.propTypes = {
    comments: PropTypes.object
}
