"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import React from "react";

type Props = {};

const ClientPage = ({}: Props) => {
  const user = useCurrentUser();

  return <UserInfo user={user} label={"Client Component"} />;
};

export default ClientPage;
