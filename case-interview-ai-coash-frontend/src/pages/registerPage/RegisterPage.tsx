import { useState } from "react";
import { Link, useNavigate } from "react-router";

import TextField from "../../components/common/TextField/TextField";
import Button from "../../components/common/Button/Button";
import Style from "../registerPage/RegisterPage.module.css";
import { registerApi } from "../../api/auth";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleRegister(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const token = await registerApi({ name, email, password });

      console.log(token.access_token);
      navigate("/cases");
    } catch (error) {
      console.error("Signup failed:", error);

      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Registration failed");
      }
    }
  }

  return (
    <div className={Style.formContainer}>
      <div className={Style.formHeader}>
        <h2> Welcom to Case Interview AI Coach</h2>
        <h2>Create Your New Account</h2>
      </div>
      <form onSubmit={handleRegister}>
        <div className={Style.formControl}>
          <TextField
            required={true}
            placeholder="Name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={Style.formControl}>
          <TextField
            required={true}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={Style.formControl}>
          <TextField
            placeholder="Password"
            type="password"
            value={password}
            required={true}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {error && <div className={Style.errorMessage}>{error}</div>}
        <div className={Style.submitForm}>
          <Button type="submit" className={Style.signupButton}>
            Sign Up
          </Button>
        </div>
      </form>
      <div className={Style.actions}>
        <Link to={"/login"}>Already have an account?</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
