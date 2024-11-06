import AdmisInfo from "./assignment/AdmisInfo";
import UsersInfo from "./assignment/UsersInfo";
import AdminInfo from "./Components/AdminInfo";
import UserInfo from "./Components/UserInfo";

let date = new Date();

const App = () => {
  return (
    <div>
      <h1>User Info</h1>
      <UserInfo
        username="Amith"
        email="amithrao0606@gmail.com"
        age={24}
        location={["Earth", "India"]}
      />

      <h1>Admin Info</h1>
      <AdminInfo
        username="Vikram"
        email="vik0505@gmail.com"
        age={25}
        location={["Earth", "Srilanka"]}
        admin="yes"
      />

      {/* Assignment */}
      <UsersInfo id={1} name="Arjun" email="amithrao0606@gmail.com" />

      <AdmisInfo id={2} name="Varun" email="vmb0101@gmail.com" role="admin" lastlogin={date}/>
    </div>
  );
};

export default App;
