import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post-List-Store";

const Post = ({ post }) => {
  const { delItem } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => {
          return (
            <span key={tag} className="badge text-bg-primary tag">
              {tag}
            </span>
          );
        })}
      </div>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => {
          delItem(post.id);
        }}
      >
        <MdDelete />
      </span>
      <div className="alert alert-info reactions" role="alert">
        {`Reactions on this post are ${post.reactions}`}
      </div>
    </div>
  );
};

export default Post;
