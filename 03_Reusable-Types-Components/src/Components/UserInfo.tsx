export type UserInfoProp = {
  username: string;
  email: string;
  age: number;
  location: string[];
};

const UserInfo = ({ username, email, age, location }: UserInfoProp) => {
  return (
    <ul>
      <li>{username}</li>
      <li>{email}</li>
      <li>{age}</li>
      <li>{JSON.stringify(location)}</li>
    </ul>
  );
};

export default UserInfo;