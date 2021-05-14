import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "../../../ui";
import instance from "../../../api";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(2).max(25).required(),
});

interface LoginValues {
  email: string;
  password: string;
}

function Login() {
  const [cookies, setCookie] = useCookies();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }: LoginValues) => {
    try {
      const response = await instance.post("/admin/login", { email, password });
      if (response.data.token) {
        setCookie("token", response.data.token);
        history.push("/admin");
      }
    } catch (e) {
      console.log("E => ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField name="email" type="email" register={register} />
      <TextField type="password" name="password" register={register} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
