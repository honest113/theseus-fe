import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { loadUser, login } from "../../redux/slices/auth/AuthSlice";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleLogin = () => {
    dispatch(login());
  }

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
      <CssVarsProvider>
        <main>
          <Sheet
            sx={{
              width: 300,
              mx: "auto",
              my: 4,
              py: 3,
              px: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "sm",
              boxShadow: "md"
            }}
            variant="outlined"
          >
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Sign in to continue.</Typography>
            </div>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="johndoe@email.com"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" placeholder="password" />
            </FormControl>

            <Button sx={{ mt: 1 }} onClick={handleLogin}>Log in</Button>
            <Typography
              endDecorator={<Link href="/auth/register">Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Don&apos;t have an account?
            </Typography>
          </Sheet>
        </main>
      </CssVarsProvider>
    );
  }
};

export default LoginPage;
