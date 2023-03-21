import React from 'react'
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

const RegisterPage = () => {
  return (
    <div>
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
                <b>Sign Up</b>
              </Typography>
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
            <FormControl>
              <FormLabel>Re Password</FormLabel>
              <Input name="password" type="password" placeholder="re password" />
            </FormControl>

            <Button sx={{ mt: 1 }}>Sign up</Button>
            <Typography
              endDecorator={<Link href="/auth/login">Sign in</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Have an account?
            </Typography>
          </Sheet>
        </main>
      </CssVarsProvider>
    </div>
  )
}

export default RegisterPage