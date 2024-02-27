import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addItem } = useContext(PostList);
  return (
    <Form method="POST" className="form">
      <div className="mb-3">
        <label htmlFor="User-Id" className="form-label">
          User-Id:
        </label>
        <input
          type="text"
          className="form-control"
          id="User-Id"
          placeholder="Enter User-Id"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};
export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      // addItem(post);
      console.log(post);
    });
  return redirect("/");
}
export default CreatePost;
