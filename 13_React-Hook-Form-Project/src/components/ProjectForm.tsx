import { useForm, SubmitHandler } from "react-hook-form";
import "../style.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
}

const ProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First name : </label>
          <input
            type="text"
            id="firstName"
            //   placeholder="First name"
            {...register("firstName", {
              required: "First name is required!",
            })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div>
          <label htmlFor="lastName">Last name : </label>
          <input
            type="text"
            id="lastName"
            //   placeholder="Last name"
            {...register("lastName", {
              required: "Last name is required!",
            })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            //   placeholder="Last name"
            {...register("email", {
              required: "Email address is required!",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="city">City : </label>
          <input
            type="text"
            id="city"
            //   placeholder="Last name"
            {...register("city", {
              required: "City is required!",
            })}
          />
          {errors.city && <p>{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="state">State : </label>
          <input
            type="text"
            id="state"
            //   placeholder="Last name"
            {...register("state", {
              required: "State is required!",
            })}
          />
          {errors.state && <p>{errors.state.message}</p>}
        </div>

        <div>
          <label htmlFor="zip">Zip : </label>
          <input
            type="text"
            id="zip"
            //   placeholder="Last name"
            {...register("zip", {
              required: "Zip is required!",
            })}
          />
          {errors.zip && <p>{errors.zip.message}</p>}
        </div>

        <div>
          <label htmlFor="country">Country : </label>
          <input
            type="text"
            id="country"
            //   placeholder="Last name"
            {...register("country", {
              required: "Country is required!",
            })}
          />
          {errors.country && <p>{errors.country.message}</p>}
        </div>

        <div>
          <label htmlFor="completeLocation">Complete Location : </label>
          <input
            type="text"
            id="completeLocation"
            //   placeholder="Last name"
            {...register("completeLocation", {
              required: "Complete Location is required!",
            })}
          />
          {errors.completeLocation && <p>{errors.completeLocation.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProjectForm;