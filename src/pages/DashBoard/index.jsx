import Header from "../../components/Header"
import InfoUser from "../../components/InfoUser"
import TechnologiesList from "../../components/technologiesList"
import Modal from "../../components/Modal"
import Button from "../../components/Button"
import arrow from "../../assets/arrow.svg"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Api from "../../Api"

import { DashBoardContainer } from "./style"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

function DashBoard({ routesController }) {
  const [dataUser, setDataUser] = useState({})

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
  const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState(false)
  const [techForUpdate, setTechForUpdate] = useState({})

  const token = window.localStorage.getItem("token")

  const schema = yup.object().shape({
    title: yup.string().required()
  })

  useEffect(() => {
    const id = window.localStorage.getItem("idUser")

    Api.get(`/users/${id}`)
      .then((res) => setDataUser(res.data))
      .catch((err) => console.log(err))
  }, [modalAddIsOpen, modalUpdateIsOpen])

  function addTech(newData) {
    Api.post("/users/techs", newData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        toast.success("Tecnologia cadastrada!")
        setModalAddIsOpen(false)
      })
      .catch(() => toast.error("Tecnologia já cadastrada"))
  }

  function updateTech(newData) {
    Api.put(`/users/techs/${techForUpdate.id}`, newData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        toast.success("Tecnologia atualizada!")
        setModalUpdateIsOpen(false)
      })
      .catch((err) => console.log(err))
  }

  function openModalAdd() {
    setModalAddIsOpen(true)
  }

  function openModalUpdate(currentTech) {
    setModalUpdateIsOpen(true)
    setTechForUpdate(currentTech)
  }

  function closeModal(e) {
    if (e.target.className.includes("close")) {
      setModalAddIsOpen(false)
      setModalUpdateIsOpen(false)
    }
  }

  function deleteTech(idTech) {
    Api.delete(`/users/techs/${idTech}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => {
      setModalAddIsOpen("")
      setModalUpdateIsOpen("")
      toast.success("Tecnologia deletada!")
    })
  }

  function logoutAccount() {
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("idUser")
    routesController.push("/login")
  }

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <>
      <DashBoardContainer
        width="100%"
        height="100vh"
        flexFlow="column nowrap"
        justifyContent="flex-start"
      >
        <Header logoutAccount={logoutAccount} />
        <InfoUser dataUser={dataUser} setDataUser={setDataUser} />
        <TechnologiesList
          dataUser={dataUser}
          openModalAdd={openModalAdd}
          openModalUpdate={openModalUpdate}
          setModalUpdateIsOpen={setModalUpdateIsOpen}
          deleteTech={deleteTech}
        />

        {!!modalAddIsOpen && (
          <Modal title="Cadastrar Tecnologia" closeModal={closeModal}>
            <form onSubmit={handleSubmit(addTech)}>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                placeholder="Nome da tecnologia"
                className="active"
                {...register("title")}
              />

              <label htmlFor="status">Status</label>
              <select id="status" {...register("status")} className="active">
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
              <img src={arrow} alt="arrow" />

              <Button type="submit" background="default" width="100%">
                Cadastrar Tecnologia
              </Button>
            </form>
          </Modal>
        )}

        {!!modalUpdateIsOpen && (
          <Modal title="Tecnologia Detalhes" closeModal={closeModal}>
            <form onSubmit={handleSubmit(updateTech)}>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                placeholder={techForUpdate?.title}
                className="inactive"
                disabled
              />

              <label htmlFor="status">Status</label>
              <select id="status" {...register("status")} className="active">
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
              <img src={arrow} alt="arrow" />

              <Button type="submit" background="disable" width="62%">
                Salvar alterações
              </Button>
              <Button
                background="dark"
                width="30%"
                onClick={(e) => {
                  e.preventDefault()
                  deleteTech(techForUpdate.id)
                }}
              >
                Excluir
              </Button>
            </form>
          </Modal>
        )}
      </DashBoardContainer>

      <ToastContainer
        position="top-right"
        autoClose={1000}
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

export default DashBoard
