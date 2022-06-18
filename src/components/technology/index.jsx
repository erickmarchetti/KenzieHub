import lixeira from "../../assets/lixeira.svg"
import { TechCard } from "./style"

function Technology({ tech, deleteTech, openModalUpdate }) {
  return (
    <TechCard onClick={() => openModalUpdate(tech)}>
      <h2>{tech.title}</h2>
      <span>{tech.status}</span>
      <button
        onClick={() => {
          deleteTech(tech.id)
        }}
      >
        <img src={lixeira} alt="lixeira" />
      </button>
    </TechCard>
  )
}

export default Technology
