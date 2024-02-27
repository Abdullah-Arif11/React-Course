import { useEffect, useState } from "react";
import { useCallback } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addItem: () => {},
  delItem: () => {},
});
const PostListReducer = (crrPostList, action) => {
  let newPostList = crrPostList;
  if (action.type === "DELETE_POST") {
    newPostList = crrPostList.filter((crrPost) => {
      return crrPost.id !== action.payload.postId;
    });
  } else if (action.type === "FETCH_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...crrPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchedList] = useReducer(PostListReducer, []);
  const addItem = (post) => {
    dispatchedList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const getPost = (posts) => {
    dispatchedList({
      type: "FETCH_POSTS",
      payload: {
        posts,
      },
    });
  };
  const delItem = useCallback(
    (postId) => {
      dispatchedList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchedList]
  );
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        getPost(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <PostList.Provider value={{ postList, fetching, addItem, delItem }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
