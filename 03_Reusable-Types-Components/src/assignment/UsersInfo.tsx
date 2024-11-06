import { Info } from "./types"

const UsersInfo = ({ id, name, email} : Info) => {
  return (
    <div>
        <h1>UserId : {id}</h1>
        <h3>Name : {name}</h3>
        <h3>Email : {email}</h3>
    </div>
  )
}

export default UsersInfo