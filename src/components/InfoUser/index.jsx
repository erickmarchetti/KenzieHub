import { InfoUserContainer } from "./style"

function InfoUser({ dataUser }) {
  return (
    <InfoUserContainer
      border="1px solid var(--grey-3)"
      width="100%"
      height="133px"
    >
      <InfoUserContainer
        width="90%"
        gap="10px"
        justifyContent="space-between"
        maxWidth="780px"
      >
        <h2>Olá, {dataUser.name}</h2>
        <span>{dataUser.course_module}</span>
      </InfoUserContainer>
    </InfoUserContainer>
  )
}

export default InfoUser
