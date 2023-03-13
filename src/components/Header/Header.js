import { useLocation, useNavigate } from "react-router-dom"
import logo from "../../img/labeddit-logo-header.png"
import { goToLoginPage } from "../../routes/coordinator"
import { Container } from "./styled"


export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const logout = () => {
        window.localStorage.removeItem("Labeddit Token");
        goToLoginPage(navigate);
    };

    return (
        <Container>
            <div>
                <img src={logo}/>
            </div>
            <span>
                {location.pathname === "/signup"?
                <h2><a onClick={()=>goToLoginPage(navigate)}>Entrar</a></h2>
                :
                <h2><a onClick={()=>logout()}>Logout</a></h2>
                }
                
            </span>
        </Container>
    )
}