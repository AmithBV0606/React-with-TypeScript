import React from "react"
import { type AdminsInfoList } from "./types"

const AdmisInfo: React.FC<AdminsInfoList> = ({id, name, email, role, lastlogin}) => {
  return (
    <div>
    <h1>UserId : {id}</h1>
    <h3>Name : {name}</h3>
    <h3>Email : {email}</h3>
    <h3>Role : {role}</h3>
    <h3>Last-Login : {lastlogin.toLocaleString()}</h3>
</div>
  )
}

export default AdmisInfo