import logo from "../../assets/Logo.svg"
import Button from "../../components/Button"
import { FlexContainer } from "../../styles/GlobalStyle"

function Home({ routesController }) {
  return (
    <FlexContainer
      maxWidth="369px"
      width="100%"
      gap="10px"
      flexFlow="row wrap"
      height="100vh"
      alignContent="center"
    >
      <img
        className="home__logo logo"
        src={logo}
        alt="Kenzie Hub"
        onClick={() => window.location.reload()}
      />
      <Button
        width="45%"
        background="default"
        onClick={() => routesController.push("/login")}
      >
        Login
      </Button>
      <Button
        width="45%"
        background="dark"
        onClick={() => routesController.push("/register")}
      >
        Cadastrar-se
      </Button>
    </FlexContainer>
  )
}

export default Home
