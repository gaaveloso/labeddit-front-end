import { useLocation, useNavigate, useParams } from "react-router-dom";
import logo from "../../img/labeddit-logo-header.png";
import { goToHomePage, goToLoginPage } from "../../routes/coordinator";
import { Container } from "./styled";
import close from "../../img/close.png";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const logout = () => {
    window.localStorage.removeItem("Labeddit Token");
    goToLoginPage(navigate);
  };

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Container>
            <div>
              <img src={logo} />
            </div>
            <span>
              <h2>
                <a onClick={() => logout()}>Logout</a>
              </h2>
            </span>
          </Container>
        );
      case "/signup":
        return (
          <Container>
            <div>
              <img src={logo} />
            </div>
            <span>
              <h2>
                <a onClick={() => goToLoginPage(navigate)}>Entrar</a>
              </h2>
            </span>
          </Container>
        );
      case `/posts/comment/${params.postId}`:
        return (
          <Container>
            <div>
              <img src={logo} />
            </div>
            <span>
              <img src={close} onClick={() => goToHomePage(navigate)} />
            </span>
            <span>
              <h2>
                <a onClick={() => logout()}>Logout</a>
              </h2>
            </span>
          </Container>
        );
    }
  };
  return <Container>{renderHeader()}</Container>;
};
