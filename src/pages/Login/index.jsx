import logo from "../../assets/Logo.svg"
import { FlexContainer } from "../../styles/GlobalStyle"
import { FlexForm, LoginContainer } from "./style.js"
import Button from "../../components/Button"

import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import Api from "../../Api"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Login({ routesController }) {
  function getDataLogin(newData) {
    Api.post("/sessions", newData)
      .then((res) => {
        window.localStorage.setItem("token", res.data?.token)
        window.localStorage.setItem("idUser", res.data?.user.id)
        routesController.push("/dashboard")
      })
      .catch((err) => toast.error(err.response.data.message))
  }

  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    password: yup.string().required("Campo Obrigatório")
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <>
      <FlexContainer
        flexFlow="column nowrap"
        width="100%"
        gap="19.39px"
        height="100vh"
      >
        <img
          src={logo}
          alt="Kenzie Hub"
          onClick={() => window.location.reload()}
          className="logo"
        />
        <LoginContainer
          flexFlow="column nowrap"
          width="90%"
          maxWidth="369px"
          gap="19.39px"
          hasBackground={true}
          padding="42px 17px"
        >
          <h2>Login</h2>

          <FlexForm
            onSubmit={handleSubmit(getDataLogin)}
            width="100%"
            gap="18px"
            flexFlow="column nowrap"
          >
            <LoginContainer width="100%" gap="14px" flexFlow="column nowrap">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
              {errors.email?.message && (
                <span className="error">{errors.email.message}</span>
              )}
            </LoginContainer>

            <LoginContainer width="100%" gap="14px" flexFlow="column nowrap">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              {errors.password?.message && (
                <span className="error">{errors.password.message}</span>
              )}
            </LoginContainer>

            <Button type="submit" background="default" width="100%">
              Entrar
            </Button>
          </FlexForm>

          <span>Ainda não possui uma conta?</span>

          <Button
            background="dark"
            width="100%"
            onClick={() => routesController.push("/register")}
          >
            Cadastrar-se
          </Button>
        </LoginContainer>
      </FlexContainer>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Login
