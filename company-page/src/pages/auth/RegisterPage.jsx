import React, { useEffect, useState } from "react";
import "./scss/login.scss";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Link as LinkRD } from "react-router-dom";
import { loadUser } from "../../redux/slices/auth/AuthSlice";
import {
  Link,
  Container,
  Typography,
  Stack,
  Button,
  Box,
  CircularProgress,
  TextField,
  InputAdornment,
  Checkbox
} from "@mui/material";
import { styled } from "@mui/material/styles";
import useResponsive from "../../hooks/useResponsive";
import loginImg from "../../assets/imgs/illustration_login.png";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex"
  }
}));

const StyledSection = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRight: "1px solid #e9e4e4",
  boxShadow: "2px 1px 19px -5px rgba(222,210,210,0.75)",
  backgroundColor: theme.palette.background.default
}));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

const LoginPage = () => {
  const mdUp = useResponsive("up", "md");

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);

  // Username and password state
  const [value, setValue] = useState({
    username: "",
    password: "",
    showPassword: false
  });

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const user = {
      userName: value.username,
      password: value.password
    };

    try {
      // const res = await loginByAdmin(user);
      // dispatch(login(res.data));
    } catch (error) {
      alert("Incorrect username or password!");
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
      <>
        <StyledRoot>
          {mdUp && (
            <StyledSection>
              <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                Hi, Welcome Back
              </Typography>
              <img src={loginImg} alt="login" />
            </StyledSection>
          )}

          <Container maxWidth="sm">
            <StyledContent>
              <Typography variant="h4" gutterBottom>
                Sign up
              </Typography>
              <Stack spacing={3}>
                <TextField name="email" label="Email address" />

                <TextField
                  name="password"
                  label="Password"
                  type={value.showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end"></InputAdornment>
                    )
                  }}
                />
                
                <TextField
                  name="password"
                  label="Re Password"
                  type={value.showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end"></InputAdornment>
                    )
                  }}
                />
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ my: 2 }}
              >
              </Stack>

              <Button variant="contained" size="large" type="submit">
                Sign up
              </Button>
              <div className="or">
                <span>OR</span>
              </div>
              <div className="bottom">
                <div className="bottom__register">
                  <div className="login__content__bottom__register__text">
                    Already have an account?
                  </div>
                  <LinkRD
                    to="/auth/login"
                    className="bottom__register__link"
                  >
                    Return to Sign in
                  </LinkRD>
                </div>
              </div>
            </StyledContent>
          </Container>
        </StyledRoot>
      </>
    );
  }
};

export default LoginPage;
