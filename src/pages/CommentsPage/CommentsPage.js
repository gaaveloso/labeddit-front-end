import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Comments,
  ContainerCard,
  DivLikeComments,
  LikeDislike,
} from "../../components/Card/CardStyled";
import arrowUp from "../../img/arrow-up.png";
import arrowDown from "../../img/arrow-down.png";
import baloon from "../../img/baloon.png";
import { Header } from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToCommentPage, goToLoginPage } from "../../routes/coordinator";
import { Container, PostContainer } from "./styled";
import { CommentCard } from "../../components/Card/CommentCard";

export const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  const params = useParams();
  const navigate = useNavigate();
  const context = useContext(GlobalContext);

  const { posts, fetchPosts } = context;

  useEffect(() => {
    const token = window.localStorage.getItem("Labeddit Token");

    if (!token) {
      goToLoginPage(navigate);
    } else {
      fetchPosts();
      fetchComments();
    }
  }, [comments]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/posts/comment/${params.postId}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("Labeddit Token"),
          },
        }
      );
    //   console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  const createComment = async (event) => {
    event.preventDefault();

    try {
      const body = {
        content: content,
      };

      await axios.post(`${BASE_URL}/posts/comment/${params.postId}`, body, {
        headers: {
          Authorization: window.localStorage.getItem("Labeddit Token"),
        },
      });

      setContent("");
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  const like = async () => {
    try {
      const body = {
        like: true,
      };

      await axios.put(BASE_URL + `/posts/${post.id}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("Labeddit Token"),
        },
      });

      fetchPosts();
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  const dislike = async () => {
    try {
      const body = {
        like: false,
      };

      await axios.put(BASE_URL + `/posts/${post.id}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("Labeddit Token"),
        },
      });

      fetchPosts();
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };
  const post = posts.find((post) => post.id === params.postId);

  return (
    <Container>
      <Header />
      <ContainerCard>
        <p>Enviado por: {post?.creator.name}</p>
        <h1>{post?.content}</h1>
        <DivLikeComments>
          <LikeDislike>
            <span onClick={like}>
              <img src={arrowUp} />
              {post?.likes}
            </span>
            <span onClick={dislike}>
              <img src={arrowDown} />
              {post?.dislikes}
            </span>
          </LikeDislike>
          <Comments>
            <span>
              <img src={baloon} />
            </span>
            {post?.comment}
          </Comments>
        </DivLikeComments>
      </ContainerCard>
      <PostContainer>
        <form onSubmit={createComment}>
          <section>
            <input
              placeholder="Escreva seu comentário..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </section>
          <button>Responder</button>
        </form>
      </PostContainer>

      <section>
        {comments &&
          comments.map((comment) => {
            return <CommentCard key={comment.id} fetchComments={fetchComments} comment={comment} />;
          })}
      </section>
    </Container>
  );
};
