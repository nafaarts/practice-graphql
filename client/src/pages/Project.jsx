import { Link, useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import Spinner from "../components/Spinner"
import ClientInfo from "../components/ClientInfo"
import { GET_PROJECT } from "../queries/projectQueries"
import ProjectEditForm from "../components/ProjectEditForm"
import ProjectDelete from "../components/ProjectDelete"

export default function Project() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  })

  if (loading) return <Spinner />
  if (error)
    return (
      <>
        <p className="lead">Something went wrong...</p>
        <small>{error.message}</small>
      </>
    )

  return (
    <>
      {!loading && !error && (
        <>
          <div className="mx-auto card p-5 mb-3">
            <Link
              to="/"
              className="btn btn-secondary btn-sm w-25 d-inline me-auto mb-4"
            >
              Back
            </Link>
            <h1>{data.project.name}</h1>
            <p>{data.project.description}</p>

            <h5 className="mt-3">Project Status :</h5>
            <p className="lead">{data.project.status}</p>

            <ClientInfo client={data.project.client} />
          </div>
          <div className="mx-auto card p-5 mb-3">
            <ProjectEditForm project={data.project} />
          </div>
          <div className="mx-auto card p-5 mb-3">
            <ProjectDelete projectId={data.project.id} />
          </div>
        </>
      )}
    </>
  )
}
