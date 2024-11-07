import { FormEvent, useRef, useState } from "react";

type formData = {
  name: string;
  email: string;
  password: string;
};

const Forms = () => {
  // Types for useState
  const [submittedData, setSubmittedData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });

  // Types for useRef
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  // Note : Since useRef is going to be used inside an HTML input field, hence the type <HTMLInputElement>

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameVal = name.current!.value;
    const emailVal = email.current!.value;
    const passwordVal = password.current!.value;
    setSubmittedData({
      name: nameVal,
      email: emailVal,
      password: passwordVal,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" ref={name} />
      <input type="email" placeholder="Enter your email" ref={email} />
      <input type="password" placeholder="Enter password" ref={password} />
      <button type="submit">Submit</button>

      <section>
        <h1>Name : {submittedData.name}</h1>
        <h1>Email : {submittedData.email}</h1>
        <h1>Password : {submittedData.password}</h1>
      </section>
    </form>
  );
};

export default Forms;