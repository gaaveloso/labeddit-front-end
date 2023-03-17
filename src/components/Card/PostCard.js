import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { BASE_URL } from "../../constants/url";
import arrowUp from "../../img/arrow-up.png";
import arrowDown from "../../img/arrow-down.png";
import baloon from "../../img/baloon.png";
import {
  Comments,
  ContainerCard,
  DivLikeComments,
  LikeDislike,
} from "./CardStyled";
import { goToCommentPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const PostCard = (props) => {
  const { post } = props;
  const navigate = useNavigate();

  const context = useContext(GlobalContext);
  const { fetchPosts } = context;

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

  return (
    <ContainerCard>
      <p>Enviado por: {post.creator.name}</p>
      <h1>{post.content}</h1>
      <DivLikeComments>
        <LikeDislike>
          <span onClick={like}>
            <img src={arrowUp} />
            {post.likes}
          </span>
          <span onClick={dislike}>
            <img src={arrowDown} />
            {post.dislikes}
          </span>
        </LikeDislike>
        <Comments>
          <span onClick={() => goToCommentPage(navigate, post.id)}>
            <img src={baloon} />
          </span>
          {post.comments}
        </Comments>
      </DivLikeComments>
    </ContainerCard>
  );
};
