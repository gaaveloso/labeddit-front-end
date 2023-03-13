import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import logo from "../../img/labeddit-logo-header.png"
import { goToHomePage, goToSignupPage } from "../../routes/coordinator";
import {
  Checkbox,
  Container,
  ContainerSelection,
  DivButton,
  Input,
  DivButtonSignup,
  DivStyled,
} from "./styled";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChangeForm = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setForm({ ...form, [name]: value });
  };

  const login = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const body = {
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(BASE_URL + "/users/login", body);
      window.localStorage.setItem("Labeddit Token", response.data.token);

      setIsLoading(false);
      goToHomePage(navigate);
    } catch (error) {
      setIsLoading(false);
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  return (
    <Container>
      <ContainerSelection>
        <img src={logo} width="60vw"/>
        <h1>LabEddit</h1>
        <h3>O projeto de rede social da Labenu</h3>
        <article>
          <form onSubmit={login} autoComplete="off">
            <section>
              <Input
                placeholder="E-mail"
                name={"email"}
                value={form.email}
                onChange={handleInputChangeForm}
              />
            </section>
            <section>
              <Input
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                name={"password"}
                value={form.password}
                onChange={handleInputChangeForm}
              />
              <Checkbox>
                <input
                  type="checkbox"
                  value={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                Mostrar Senha
              </Checkbox>
            </section>
            <DivStyled>
              <DivButton>
                <button disabled={isLoading}>Entrar</button>
              </DivButton>
            </DivStyled>
          </form>
          <DivButtonSignup>
            <button
              disabled={isLoading}
              onClick={() => goToSignupPage(navigate)}
            >
              Crie uma conta!
            </button>
          </DivButtonSignup>
        </article>
      </ContainerSelection>
    </Container>
  );
};
