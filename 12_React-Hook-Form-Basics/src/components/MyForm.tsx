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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        <button type="submit">Submit</button>
        {errors.name && (<p style={{ color: "red" }}>{errors.name.message}</p>)}
      </div>
    </form>
  );
};

export default MyForm;