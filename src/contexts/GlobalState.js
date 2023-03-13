import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";

export const GlobalState = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem("Labeddit Token");

    if (token) {
      fetchPosts();
    }
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(BASE_URL + "/posts",{
        headers: {
            Authorization: window.localStorage.getItem("Labeddit Token")
        }
      });

      setPosts(response.data);
    } catch (error) {
      console.log(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  return {
    posts,
    setPosts,
    fetchPosts
  }
};
