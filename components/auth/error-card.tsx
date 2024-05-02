import React from "react";
import { CardWrapper } from "./card-wrapper";
import { BsExclamationTriangle } from "react-icons/bs";

type Props = {};

export default function ErrorCard({}: Props) {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonHref="/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <BsExclamationTriangle className="text-destructive size-10" />
      </div>
    </CardWrapper>
  );
}
