import { useState } from "react";
import { Link, useNavigate } from "react-router";

import TextField from "../../components/common/TextField/TextField";
import Button from "../../components/common/Button/Button";
import Style from "../loginPage/LoginPage.module.css";
import { loginApi } from "../../api/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const token = await loginApi({
        email,
        password,
      });

      console.log(token.access_token);
      navigate("/cases");
    } catch (error) {
      console.error("Login failed:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Login failed");
      }
    }
  };

  return (
    <div className={Style.formContainer}>
      <div className={Style.formHeader}>
        <h2> Welcom Back! to Case Interview AI Coach</h2>
        <h2>LogIn</h2>
      </div>
      <form onSubmit={handleLogin}>
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
          <Button type="submit" className={Style.loginButton}>
            Login
          </Button>
        </div>
      </form>
      <div className={Style.actions}>
        <Link to={"/register"}>You Don't have account yet?</Link>
      </div>
    </div>
  );
}

export default LoginPage;
