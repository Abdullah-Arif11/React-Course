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
  } else if (action.type === "ADD_POST") {
    newPostList = [...crrPostList, action.payload];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const InitList = [
    {
      id: "1",
      title: "Tour to Islamabad",
      body: "We are here at Islamabad enjoying winters.we also goes to Shah-Faisal mosque",
      userId: "User-5",
      reactions: "45",
      tags: ["Tour", "Islamabad", "Enjoy"],
    },
    {
      id: "2",
      title: "Cricket Match",
      body: "Today I goes to National Stadium Karachi to watch a match between Pakistan and India.",
      userId: "User-9",
      reactions: "82",
      tags: ["Crciket", "NationalStadium"],
    },
  ];
  const [postList, dispatchedList] = useReducer(PostListReducer, InitList);
  const addItem = (userId, title, body, reactions, tags) => {
    dispatchedList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        userid: userId,
        reactions: reactions,
        tags: tags,
      },
    });
  };
  const delItem = (postId) => {
    dispatchedList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addItem, delItem }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
