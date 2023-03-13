import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostCard } from "../../components/PostCard";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToLoginPage } from "../../routes/coordinator";
import { Container, PostContainer } from "./styled";

export const HomePage = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { posts, fetchPosts } = context;
  const { content, setContent } = useState("");

  console.log(posts);

  useEffect(() => {
    const token = window.localStorage.getItem("Labeddit Token");

    if (!token) {
      goToLoginPage(navigate);
    } else {
      fetchPosts();
    }
  }, []);

  const createPost = async (event) => {
    event.preventDefault();

    try {
      const body = {
        content: content,
      };

      await axios.get(BASE_URL + "/posts", body, {
        headers: {
          Authorization: window.localStorage.getItem("Labeddit Token"),
        },
      });

      setContent("");
      fetchPosts();
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };
  return (
    <Container>
    <PostContainer>
      <form onSubmit={createPost}>
        <section>
          <input
          placeholder="Escreva seu post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          />
        </section>
        <button>Postar</button>
      </form>
    </PostContainer>


    <section>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </section>
  </Container>
    )   
};
