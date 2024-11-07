import { useEffect, useState } from "react";

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const UserList = () => {
  const [userData, setUserData] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.log("Error fetching");
      }
    };

    fetchData()
  }, []);

  return (
    <div style={{ display:"flex", flexWrap:"wrap", gap:"50px"}}>
      {userData.length > 0 ? (
        userData.map((data) => (
          <div key={data.id} style={{ border:"2px solid", borderRadius:"20px"}}>
            <p>Id : {data.id}</p>
            <p>Name : {data.name}</p>
            <p>Username : {data.username}</p>
            <p>Email : {data.email}</p>
            <p>Phone : {data.phone}</p>
          </div>
        ))
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default UserList;