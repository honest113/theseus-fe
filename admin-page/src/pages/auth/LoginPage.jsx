import React, { useEffect, useState } from "react";
import "./scss/login.scss";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { loadUser, login } from "../../redux/slices/auth/AuthSlice";
import {
  Box,
  CircularProgress,
  InputLabel,
  OutlinedInput,
  FormControl,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { loginByAdmin } from "../../apis/auth/authApi";

const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);

  // Username and password state
  const [value, setValue] = useState({
    username: "",
    password: "",
    showPassword: false
  });

  // Handle show password
  const handleChangeValue = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValue({
      ...value,
      showPassword: !value.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const user = {
      userName: value.username,
      password: value.password
    };

    try {
      const res = await loginByAdmin(user);
      dispatch(login(res.data));
    } catch (error) {
      alert("Incorrect username or password!")
    }
  };

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (isAuthenticated) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="auth">
        <div className="auth__wrapper">
          <div className="auth__content">
            <div className="auth__content__top">
              <div className="auth__content__top__title">Log In</div>
              <div className="auth__content__top__sub">
                Welcome Back! Please sign in to your Account
              </div>
            </div>
            <form onSubmit={handleSubmitForm} className="auth__content__form">
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="username">Username</InputLabel>
                <OutlinedInput
                  id="username"
                  type="text"
                  label="Username"
                  placeholder="Your username here..."
                  value={value.username}
                  onChange={handleChangeValue("username")}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  type={value.showPassword ? "text" : "password"}
                  value={value.password}
                  onChange={handleChangeValue("password")}
                  label="Password"
                  placeholder="Your password here..."
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {value.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <div className="auth__content__form__action">
                <div className="auth__content__form__action__remember">
                  <FormControlLabel
                    label="Remember Me"
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "#d81b60"
                          }
                        }}
                      />
                    }
                  />
                </div>
                <Link
                  to="/auth/reset-password"
                  className="auth__content__form__action__forgot"
                >
                  Forgot Password?
                </Link>
              </div>
              <Button variant="contained" size="large" type="submit">
                Login
              </Button>
            </form>
            <div className="or">
              <span>OR</span>
            </div>
            <div className="auth__content__bottom">
              <div className="auth__content__bottom__register">
                <div className="login__content__bottom__register__text">
                  Don't have an account?
                </div>
                <Link
                  to="/auth/register"
                  className="auth__content__bottom__register__link"
                >
                  Create free account
                </Link>
              </div>
            </div>
          </div>
          <div className="auth__background-img"></div>
        </div>
      </div>
    );
  }
};

export default LoginPage;
