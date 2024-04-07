import React from "react";
import { CardWrapper } from "./card-wrapper";

type Props = {};

export function LoginForm({}: Props) {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocial
    >
      Login Form
    </CardWrapper>
  );
}
