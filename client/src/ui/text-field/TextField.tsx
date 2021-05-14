import { TextField as MuiTextField } from "@material-ui/core";

interface TextFieldProps {
  name: string;
  register: any;
  defaultValue?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
}

export const TextField = ({
  name,
  register,
  defaultValue = "",
  type = "text",
  placeholder,
}: TextFieldProps) => {
  return (
    <MuiTextField
      type={type}
      defaultValue={defaultValue}
      {...register(name)}
      placeholder={placeholder}
    />
  );
};

export default TextField;
