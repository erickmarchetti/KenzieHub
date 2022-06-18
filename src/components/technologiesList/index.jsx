import { TechListContainer } from "./style"
import Button from "../Button"
import adicionar from "../../assets/adicionar.svg"
import Technology from "../technology"

function TechnologiesList({
  dataUser,
  openModalAdd,
  setModalUpdateIsOpen,
  deleteTech,
  openModalUpdate
}) {
  return (
    <TechListContainer
      flexFlow="column nowrap"
      gap="28px"
      width="100%"
      padding="19px 0 0 0"
    >
      <TechListContainer
        width="90%"
        flexFlow="row nowrap"
        justifyContent="space-between"
        maxWidth="780px"
      >
        <h3>Tecnologias</h3>
        <Button
          height="32px"
          background="black"
          width="32px"
          maxHeight="32px"
          onClick={() => openModalAdd()}
        >
          <img src={adicionar} alt="adicionar" />
        </Button>
      </TechListContainer>

      <TechListContainer
        as="ul"
        width="90%"
        flexFlow="column nowrap"
        justifyContent="flex-start"
        maxWidth="780px"
        maxHeight="353px"
        gap="16px"
        hasBackground={true}
        padding="22px"
        overflow="scroll"
      >
        {dataUser.techs?.map((tech) => (
          <Technology
            tech={tech}
            key={tech.id}
            deleteTech={deleteTech}
            setModalUpdateIsOpen={setModalUpdateIsOpen}
            openModalUpdate={openModalUpdate}
          />
        ))}
      </TechListContainer>
    </TechListContainer>
  )
}

export default TechnologiesList
