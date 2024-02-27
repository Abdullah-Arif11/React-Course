import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-List-Store";
import WelcomeMsg from "./WelcomeMsg";
import Loader from "./Loader";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
  return (
    <>
      {postList.length === 0 && <WelcomeMsg />}
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};
export const PostLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
