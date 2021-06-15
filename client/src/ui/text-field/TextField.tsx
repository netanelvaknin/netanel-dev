import { TextField as MuiTextField } from "@material-ui/core";

interface TextFieldProps {
  name: string;
  label?: string;
  register: any;
  defaultValue?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  className?: string;
}

export const TextField = ({
  name,
  label,
  register,
  defaultValue = "",
  type = "text",
  placeholder,
  error,
  errorMessage,
  className,
}: TextFieldProps) => {
  return (
    <MuiTextField
      label={label}
      type={type}
      defaultValue={defaultValue}
      {...register(name)}
      placeholder={placeholder}
      error={error}
      helperText={errorMessage}
      variant="outlined"
      className={className}
    />
  );
};

export default TextField;
