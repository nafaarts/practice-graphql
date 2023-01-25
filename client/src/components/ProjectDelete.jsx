import { useMutation } from "@apollo/client"
import React from "react"
import { FaTrash } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { DELETE_PROJECT } from "../mutations/projectMutations"

export default function ProjectDelete({ projectId }) {
  const navigate = useNavigate()
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: {
      id: projectId,
    },
    onCompleted() {
      navigate("/")
    },
  })

  const onDelete = () => {
    if (confirm("yakin di hapus?")) {
      deleteProject()
    }
  }

  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex flex-column">
        <strong>Delete Project</strong>
        <small>Are you sure want to delete your projects ?</small>
      </div>
      <button className="btn btn-danger" onClick={onDelete}>
        <FaTrash />
      </button>
    </div>
  )
}
