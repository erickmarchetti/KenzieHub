import logo from "../../assets/Logo.svg"
import Button from "../Button"
import { HeaderContainer, ThemeHeader } from "./style"

function Header({ logoutAccount }) {
  return (
    <ThemeHeader>
      <HeaderContainer
        flexFlow="row nowrap"
        maxWidth="780px"
        width="90%"
        justifyContent="space-between"
      >
        <img
          src={logo}
          alt="Kenzie Hub"
          className="ThemeHeader__logo logo"
          onClick={() => window.location.reload()}
        />
        <Button
          background="black"
          width="55px"
          maxHeight="32px"
          onClick={() => logoutAccount()}
        >
          Sair
        </Button>
      </HeaderContainer>
    </ThemeHeader>
  )
}

export default Header
