import { SubmitHandler, useForm } from "react-hook-form";

interface IForm {
  firstName: string;
  lastName?: string;
}

function App() {
  const { register, getValues, handleSubmit } = useForm<IForm>();
  const onValid = () => {
    const { firstName, lastName } = getValues();
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register("firstName", { required: true })} type="text" />
      <input {...register("lastName")} type="text" />
    </form>
  );
}

export default App;
