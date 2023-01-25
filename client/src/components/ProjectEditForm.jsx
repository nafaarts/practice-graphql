import { useMutation } from "@apollo/client"
import React, { useState } from "react"
import { getStatusEnumValue } from "../helpers/helpers"
import { UPDATE_PROJECT } from "../mutations/projectMutations"
import { GET_PROJECT } from "../queries/projectQueries"

export default function ProjectEditForm({ project }) {
  const [name, setName] = useState(project.name)
  const [description, setDescription] = useState(project.description)
  const [status, setStatus] = useState(getStatusEnumValue(project.status))

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      description,
      status,
    },
    refetchQueries: [
      {
        query: GET_PROJECT,
        variables: {
          id: project.id,
        },
      },
    ],
  })

  const onSubmit = (e) => {
    e.preventDefault()
    if (name === "" || description === "" || status === "") {
      return alert("Please fill in all fields")
    }

    updateProject(name, description, status)
  }

  return (
    <>
      <h5>Update Project</h5>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">Not Started</option>
            <option value="progress">On Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}
