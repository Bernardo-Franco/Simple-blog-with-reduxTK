import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionsButtons";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const PostsExcerpt = ({ postId }) => {
  const post = useSelector(state => selectPostById(state, postId))
  return (
    <article>
            <h2 style={{fontSize:"26px"}}>{post.title}</h2>
            <p className="excerpt">{post.body.substring(0, 70)}</p>
            <p className="postCredit">
              <Link to={`post/${post.id}`}>View Post</Link>
              <PostAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />
              <ReactionsButtons post={post} />
            </p>
            <p style={{textAlign:"right", marginBottom:"0"}}>N.{post.id}</p>
        </article>
  )
}

export default PostsExcerpt