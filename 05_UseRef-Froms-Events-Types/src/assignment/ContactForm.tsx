import { ChangeEvent, FormEvent, useState } from "react";

type ContactFormType = {
  name: string;
  age: number;
  email: string;
};

const ContactForm = () => {
  const [data, setData] = useState<ContactFormType>({
    name: "",
    age: 0,
    email: "",
  });
  const [onSubmit, setOnSubmit] = useState<Boolean>(false);

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({...prevState, [name]:value}));
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOnSubmit(true)
    console.log("Form Submitted : ", data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={data.name}
          onChange={handleChange}
        />

        <label>Age : </label>
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={data.age}
          onChange={handleChange}
        />

        <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {onSubmit && (
        <section>
        <h1>Name :{data.name}</h1>
        <h1>Age : {data.age}</h1>
        <h1>Email : {data.email}</h1>
      </section>
      )}
    </div>
  );
};

export default ContactForm;
