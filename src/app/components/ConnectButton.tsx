// app/page.tsx
import type { NextPage } from "next";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/client";
import { lightTheme } from "thirdweb/react";
import { generatePayload, isLoggedIn, login, logout } from "@/actions/login"; // we'll create this file in the next section

const ConnectButton2 = () => {
  return (
    <ConnectButton
      client={client}
      auth={{
        isLoggedIn: async (address) => {
          console.log("checking if logged in!", { address });
          return await isLoggedIn();
        },
        doLogin: async (params) => {
          console.log("logging in!");
          await login(params);
        },
        getLoginPayload: async ({ address }) => generatePayload({ address }),
        doLogout: async () => {
          console.log("logging out!");
          await logout();
        },
      }}
      theme={lightTheme()}
      detailsButton={{
        style: {
          maxHeight: "50px",
        },
      }}
    />
  );
};

export default ConnectButton2;
