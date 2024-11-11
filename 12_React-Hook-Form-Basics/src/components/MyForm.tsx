import { SubmitHandler, useForm } from "react-hook-form";

// register : is used to connect input fields to the form.
// handleSubmit : is a function to handle formsubmission.
// errors: contains validation errors for the form.

type FormData = {
  name: string;
  email: string;
  password: string;
};

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  //  When you call "useForm<FormData>()", you’re telling TypeScript that this form will handle data of type "FormData". This helps TypeScript provide type-checking and IntelliSense suggestions based on the "FormData" structure. This ensures that any fields or properties you access in data during form submission match the structure defined by FormData.

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  // By typing "SubmitHandler<FormData>", you specify that "onSubmit" only accepts data of type "FormData". This prevents accidental use of invalid data structures, as TypeScript will throw an error if the submitted data doesn’t match the "FormData" shape.

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"  
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (<p style={{ color: 'red' }}>{errors.email.message}</p>)}
      </div>

      <div>
        <label htmlFor="email">password : </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"  
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Password has to be of atleast 6 letters!"},
          })}
        />
        {errors.password && (<p style={{ color: "red" }}>{errors.password.message}</p>)}
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MyForm;