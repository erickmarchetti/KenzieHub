import logo from "../../assets/Logo.svg"
import { FlexForm, RegisterContainer } from "./style.js"
import Button from "../../components/Button"
import arrow from "../../assets/arrow.svg"

import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import Api from "../../Api"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Register({ routesController }) {
  function getDataLogin(newData) {
    delete newData.confirmPassword
    Api.post("/users", newData)
      .then((res) => {
        res.statusText === "Created" && toast.success("Cadastro concluído!")
        setTimeout(() => routesController.push("/login"), 2000)
      })
      .catch((err) => toast.error(err.response.data.message))
  }

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo nome obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/,
        "Nome deve conter apenas letras"
      ),
    email: yup
      .string()
      .required("Campo email obrigatório")
      .email("Email inválido"),
    password: yup
      .string()
      .required("Campo senha obrigatório")
      .min(6, "Mínimo 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Campo confirmar senha obrigatório")
      .oneOf([yup.ref("password")], "Tente novamente"),
    bio: yup.string().required("Campo bio obrigatório"),
    contact: yup.string().required("Campo opção de contato obrigatório")
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const numberOfErrors = Object.keys(errors).length

  return (
    <>
      <RegisterContainer
        flexFlow="column nowrap"
        width="100%"
        height="100%"
        justifyContent="flex-start"
        gap="39px"
        margin="48px 0"
      >
        <RegisterContainer
          flexFlow="row nowrap"
          width="90%"
          maxWidth="369px"
          justifyContent="space-between"
        >
          <img
            className="register__logo logo"
            src={logo}
            alt="Kenzie Hub"
            onClick={() => window.location.reload()}
          />
          <Button
            width="67px"
            background="black"
            onClick={() => routesController.push("/")}
          >
            Voltar
          </Button>
        </RegisterContainer>

        <RegisterContainer
          flexFlow="column nowrap"
          width="90%"
          maxWidth="369px"
          gap="19.39px"
          hasBackground={true}
          padding="42px 17px 28px 17px"
        >
          <h2>Crie sua conta</h2>
          <span>Rapido e grátis, vamos nessa</span>

          <FlexForm
            onSubmit={handleSubmit(getDataLogin)}
            width="100%"
            gap="21px"
            flexFlow="column nowrap"
          >
            <RegisterContainer width="100%" gap="14px" flexFlow="column nowrap">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                placeholder="Digite aqui seu nome"
                {...register("name")}
              />
              {errors.name?.message && (
                <span className="error">{errors.name.message}</span>
              )}
            </RegisterContainer>

            <RegisterContainer width="100%" gap="14px" flexFlow="column nowrap">
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
            </RegisterContainer>

            <RegisterContainer width="100%" gap="14px" flexFlow="column nowrap">
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
            </RegisterContainer>

            <RegisterContainer width="100%" gap="14px" flexFlow="column nowrap">
              <label htmlFor="confirmPassword">Confirmar senha</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Digite novamente sua senha"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword?.message && (
                <span className="error">{errors.confirmPassword.message}</span>
              )}
            </RegisterContainer>

            <RegisterContainer width="100%" gap="14px" flexFlow="column nowrap">
              <label htmlFor="bio">Bio</label>
              <input
                id="bio"
                type="text"
                placeholder="Fale sobre você"
                {...register("bio")}
              />
              {errors.bio?.message && (
                <span className="error">{errors.bio.message}</span>
              )}
            </RegisterContainer>

            <RegisterContainer width="100%" gap="14px" flexFlow="column nowrap">
              <label htmlFor="contact">Contato</label>
              <input
                id="contact"
                type="text"
                placeholder="Opção de contato"
                {...register("contact")}
              />
              {errors.contact?.message && (
                <span className="error">{errors.contact.message}</span>
              )}
            </RegisterContainer>

            <RegisterContainer width="100%" gap="14px" flexFlow="column nowrap">
              <label>Selecionar módulo</label>
              <select {...register("course_module")}>
                <option>Primeiro módulo (Introdução ao Frontend)</option>
                <option>Segundo módulo (Frontend Avançado)</option>
                <option>Terceiro módulo (Introdução ao Backend)</option>
                <option>Quarto módulo (Backend Avançado)</option>
              </select>
              <img src={arrow} alt="arrow" className="select__arrow" />
            </RegisterContainer>

            <Button
              type="submit"
              background={numberOfErrors === 0 ? "default" : "disable"}
              width="100%"
            >
              Cadastrar
            </Button>
          </FlexForm>
        </RegisterContainer>
      </RegisterContainer>

      <ToastContainer
        position="top-right"
        autoClose={1500}
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

export default Register
