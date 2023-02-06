import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Sidebar from "@/components/Sidebar";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {/* <Sidebar> */}
      <Component {...pageProps} />
      {/* </Sidebar> */}
    </SessionProvider>
  );
}
