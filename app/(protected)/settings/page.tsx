"use client";

import React from "react";
import { Button } from "@/components/ui/button";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <Button type="submit" onClick={onClick}>
        sign out
      </Button>
    </div>
  );
};

export default SettingPage;
