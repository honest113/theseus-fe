import React, { useState } from "react";
import "./scss/login.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  CircularProgress,
  InputLabel,
  OutlinedInput,
  FormControl,
  InputAdornment,
  IconButton,
  Button
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);
  
  const [value, setValue] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (value.password !== value.confirmPassword) {
      console.log("password not match");
      return;
    }

    try {
      const user = {
        fullName: value.fullName,
        email: value.email,
        password: value.password
      };

      // const registerData = await registerUser(user);
      // if (!registerData) {
      //   // handleOpenErrModal();
      //   console.log("Register unsuccessfully");
      // } else {
      //   // handleClose();
      //   console.log("Register successfully");
      // }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <Box className="spinner">
        <CircularProgress />
      </Box>
    );
  } else if (isAuthenticated) {
    return <Navigate to="/" />;
  } else
    return (
      <div className="auth">
        <div className="auth__wrapper register">
          <div className="auth__content">
            <div className="auth__content__top">
              <div className="auth__content__top__title">Sign Up</div>
              <div className="auth__content__top__sub">
                Sign into your pages account
              </div>
            </div>
            <form onSubmit={handleSubmitForm} className="auth__content__form">
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="fullName">Full Name</InputLabel>
                <OutlinedInput
                  id="fullName"
                  type="fullName"
                  label="Full Name"
                  placeholder="Your name here..."
                  value={value.fullName}
                  onChange={handleChangeValue("fullName")}
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="Your email here..."
                  value={value.email}
                  onChange={handleChangeValue("email")}
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
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="confirmPassword">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="confirmPassword"
                  type={value.showPassword ? "text" : "password"}
                  value={value.confirmPassword}
                  onChange={handleChangeValue("confirmPassword")}
                  label="Confirm Password"
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
              <Button variant="contained" size="large" type="submit">
                Sign Up
              </Button>
            </form>
            <div className="or">
              <span>OR</span>
            </div>
            <div className="auth__content__bottom">
              
              <div className="auth__content__bottom__register">
                <div className="login__content__bottom__register__text">
                  Already have an account?
                </div>
                <Link
                  to="/auth/login"
                  className="auth__content__bottom__register__link"
                >
                  Return to Sign in
                </Link>
              </div>
            </div>
          </div>
          <div className="auth__background-img"></div>
        </div>
      </div>
    );
};

export default Register;
