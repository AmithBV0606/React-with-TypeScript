import { FC, ReactNode } from "react";

// Type 1 :
// function User(props:{name: string, age: number}) {
//   return (
//     <div>
//         <h3>Name : {props.name}</h3>
//         <h3>Age : {props.age}</h3>
//     </div>
//   )
// }

// Type 2 :
// function User({ name, age }: { name: string; age: number }) {
//   return (
//     <div>
//       <h3>Name : {name}</h3>
//       <h3>Age : {age}</h3>
//     </div>
//   );
// }

// Type 3 : Extracting types
// type UserProps = {
//   name: string;
//   age: number;
// };

// interface UserProps {
//   name: string;
//   age: number;
// }

// function User({ name, age }: UserProps) {
//   return (
//     <div>
//       <h3>Name : {name}</h3>
//       <h3>Age : {age}</h3>
//     </div>
//   );
// }

// Type 4 : Modern way of giving a type for the prop
// interface UserProps {
//     children: ReactNode;
// }

// function User({ children }: UserProps) {
//     return (
//       <div>
//         {children}
//       </div>
//     );
// }

// Type 5 : Old way of giving a type to the prop
type UserProps = {
  name: string;
  age: number;
};

const User: FC<UserProps> = ({ name, age }) => {
    return(
        <div>
            <h3>Name : {name}</h3>
            <h3>Age : {age}</h3>
        </div>
    );
}

export default User;