import { ThemeModal } from "./style"
import close from "../../assets/close.svg"

function Modal({ children, title, closeModal }) {
  return (
    <ThemeModal
      backgroundColor="rgba(18, 18, 20, 0.5)"
      position="fixed"
      width="100vw"
      height="100vh"
      flexFlow="column nowrap"
      className="close"
      onClick={closeModal}
    >
      <ThemeModal
        height="50px"
        width="90%"
        maxWidth="369px"
        flexFlow="row nowrap"
        justifyContent="space-between"
        backgroundColor="var(--grey-2)"
        borderRadius="4px 4px 0 0"
        padding="0 12px"
      >
        <h3>{title}</h3>
        <img src={close} alt="close" className="close" />
      </ThemeModal>

      <ThemeModal
        padding="17px 17px 20px 17px"
        width="90%"
        maxWidth="369px"
        backgroundColor="var(--grey-3)"
      >
        {children}
      </ThemeModal>
    </ThemeModal>
  )
}

export default Modal
