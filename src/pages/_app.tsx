import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import UserProvider from "./provider/UserProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider
      publicPaths={["/", "/login", "/signup", "/forum", "/user", "/resources"]}
    >
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </UserProvider>
  );
}
