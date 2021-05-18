import { useState } from "react";
import { TextField } from "../../../ui";
import { useForm } from "react-hook-form";
import { Button } from "@material-ui/core";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import instance from "../../../api";
import styled from "styled-components/macro";

interface NewsletterProps {
    title?: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email("כתובת אימייל לא חוקית")
    .required("נא להכניס כתובת אימייל"),
});

const Newsletter = ({
    title = 'הרשמו עכשיו לניווזלטר שלי ותקבלו עדכונים שוטפים'
}: NewsletterProps) => {
  const [registered, setRegistered] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email }: { email: string }) => {
    if (email) {
      try {
        const response = await instance.post("/newsletter/signup", { email });
        if (response.status === 200) {
          setRegistered(true);
        }
      } catch (e) {
        setError("email", {
          type: "manual",
          message: "כתובת האימייל שהזנת כבר רשומה לניווזלטר",
        });
      }
    }
  };

  return (
    <div style={{ marginTop: "9rem" }}>
      {registered ? (
        <>
          <PrimaryHeading>ההרשמה לעדכוני הניווזלטר נקלטה</PrimaryHeading>
          <PrimaryHeading>תודה רבה 🙏</PrimaryHeading>
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <PrimaryHeading>
            {title}
          </PrimaryHeading>
          <p>מבטיח לא לחפור ולשלוח עדכונים רק כשיוצאים מאמרים חדשים 😉</p>
          <div style={{ maxWidth: "50rem", margin: "2rem 0 1rem" }}>
            <TextField
              label="כתובת אימייל"
              name="email"
              register={register}
              error={!!errors.email}
              errorMessage={errors.email && errors.email.message}
            />
          </div>

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            style={{ marginTop: "2rem" }}
          >
            תרשום אותי
          </Button>
        </form>
      )}
    </div>
  );
};

const PrimaryHeading = styled.h2`
  font-size: 2.5rem;
  line-height: 1.3;
  font-family: ${(props) => props.theme.fonts.bold};
`;

export default Newsletter;
