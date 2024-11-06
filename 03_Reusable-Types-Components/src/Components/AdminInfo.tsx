import { type UserInfoProp } from "./UserInfo";

type newType = UserInfoProp & { admin: string}

const AdminInfo = ({
  username,
  email,
  age,
  location,
  admin,
}: newType) => {
  return (
    <ul>
      <li>{username}</li>
      <li>{email}</li>
      <li>{age}</li>
      <li>{JSON.stringify(location)}</li>
      <li>{admin}</li>
    </ul>
  );
};

export default AdminInfo;