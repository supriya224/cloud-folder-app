import SideNavBar from "@/components/SideNavBar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div className="flex">
        <SideNavBar />
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="">
            <Component {...pageProps} />
          </div>
       <div className="bg-white p-5">Storage</div>
        </div>
      </div>
    </SessionProvider>
  );
}
