import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { goToHomePage, goToLoginPage } from "../../routes/coordinator";
import logo_header from "../../img/labeddit-logo-header.png"
import { Checkbox, Container, ContainerSelection, DivButton, DivStyled, Input } from "./styled";
import { Header } from "../../components/Header/Header";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChangeForm = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setForm({ ...form, [name]: value });
  };

  const signup = async (event) => {
    event.preventDefault();

    if (form.password === form.passwordConfirmation) {
      try {
        setIsLoading(true);

        const body = {
          name: form.name,
          email: form.email,
          password: form.password,
        };

        const response = await axios.post(BASE_URL + "/users/signup", body);
        window.localStorage.setItem("Labeddit Token", response.data.token);

        setIsLoading(false);
        goToHomePage(navigate);
      } catch (error) {
        setIsLoading(false);
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
      }
    }
  };

  return (
    <Container>
      <Header />
      <ContainerSelection>
        <h1>Olá, boas vindas ao LabEddit ;)</h1>

        <article>
          <form
          onSubmit={signup}
          autoComplete="off"
          >
            <section>
              <Input
                placeholder="Apelido"
                name={"name"}
                value={form.name}
                onChange={handleInputChangeForm}
              />
            </section>

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
                Mostrar
              </Checkbox>
            </section>
            <DivStyled>
            <div>
            <h4>
            Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade
            </h4>
            <Checkbox>
                <input
                  type="checkbox"
                />
                <h4>Eu concordo em receber emails sobre coisas legais no Labeddit</h4>
            </Checkbox>
            </div>
            <DivButton>
            <button disabled={isLoading}>Cadastrar</button>
            </DivButton>
            </DivStyled>
          </form>
        </article>
      </ContainerSelection>
    </Container>
  );
};
