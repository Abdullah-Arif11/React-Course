import { useContext, useRef } from "react";
import { PostList } from "../store/Post-List-Store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const { addItem } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagElement = useRef();
  const handleAddPost = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagElement.current.value.split(" ");
    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagElement.current.value = "";
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
        reactions: reactions,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addItem(post);
        navigate("/");
      });
  };
  return (
    <form
      className="form"
      onSubmit={(event) => {
        handleAddPost(event);
      }}
    >
      <div className="mb-3">
        <label htmlFor="User-Id" className="form-label">
          User-Id:
        </label>
        <input
          type="text"
          className="form-control"
          id="User-Id"
          placeholder="Enter User-Id"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="What are you feeling today..."
          ref={titleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Enter content:
        </label>
        <textarea
          rows="5"
          type="text"
          className="form-control"
          id="body"
          placeholder="Enter content here"
          ref={bodyElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions:
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="Enter reactions of this post"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags:
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter your Hashtags here..."
          ref={tagElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
