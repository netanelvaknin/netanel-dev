import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, ErrorMessage } from "../../../ui";
import instance from "../../../api";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Button } from "@material-ui/core";

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
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }: LoginValues) => {
    try {
      const response = await instance.post("/admin/login", { email, password });
      if (response.data.token) {
        setCookie("token", response.data.token);
        history.push("/admin");
      } else {
        throw new Error();
      }
    } catch (e) {
      console.log("here");
      setError("username", {
        type: "manual",
        message: "אימייל או סיסמא לא תואמים",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFieldStyle
        name="email"
        type="email"
        register={register}
        placeholder="כתובת מייל"
      />

      <TextField
        type="password"
        name="password"
        register={register}
        placeholder="סיסמה"
      />

      <ButtonStyle variant="contained" color="secondary" type="submit">
        כניסה
      </ButtonStyle>

      {errors.username && (
        <ErrorMessage>{errors.username.message}</ErrorMessage>
      )}
    </form>
  );
}

export default Login;

const TextFieldStyle = styled(TextField)`
  &.MuiFormControl-root {
    margin-bottom: 2rem;
  }
`;

const ButtonStyle = styled(Button)`
  &.MuiButtonBase-root {
    margin-top: 2rem;
  }
`;
