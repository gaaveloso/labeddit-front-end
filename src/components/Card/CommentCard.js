import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { BASE_URL } from "../../constants/url";
import arrowUp from "../../img/arrow-up.png";
import arrowDown from "../../img/arrow-down.png";
import baloon from "../../img/baloon.png";
import {
  Comments,
  ContainerCard, DivLikeComments, LikeDislike
} from "./CardStyled";
import { goToCommentPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const CommentCard = (props) => {
  const { comment, fetchComments } = props;
  const navigate = useNavigate();

  const context = useContext(GlobalContext);


  const like = async () => {
    try {
      const body = {
        like: true,
      };

      await axios.put(BASE_URL + `/posts/comment/${comment.id}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("Labeddit Token"),
        },
      });

      fetchComments();
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

      await axios.put(BASE_URL + `/posts/comment/${comment.id}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("Labeddit Token"),
        },
      });

      fetchComments();
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };
  

  return (
    <ContainerCard>
      <p>Enviado por: {comment.creator.name}</p>
      <h1>{comment.content}</h1>
      <DivLikeComments>
      <LikeDislike>
      <span onClick={like}>
        <img src={arrowUp} />
        {comment.likes}
      </span>
      <span onClick={dislike}>
      <img src={arrowDown} />
        {comment.dislikes}
      </span>
      </LikeDislike>
      </DivLikeComments>
    </ContainerCard>
  );
};
