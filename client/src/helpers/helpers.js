const getStatusEnumValue = (value) => {
  let result = ""
  switch (value) {
    case "Not Started":
      result = "new"
      break
    case "In Progress":
      result = "progress"
    case "Completed":
      result = "completed"
    default:
      break
  }

  return result
}

export { getStatusEnumValue }
