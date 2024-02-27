import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-List-Store";
import WelcomeMsg from "./WelcomeMsg";
import Loader from "./Loader";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);
  return (
    <>
      {fetching && <Loader />}
      {!fetching && postList.length === 0 && <WelcomeMsg />}
      {!fetching &&
        postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </>
  );
};

export default PostList;
