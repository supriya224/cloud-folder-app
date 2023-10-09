import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import FolderList from "@/components/Folder/FolderList";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("User session",)
    if (!session) {
      router.push("/login");
    }else{
      console.log("User session",session.user)
  }
  }, [session]);

  return <div className="p-5">
    <SearchBar/>
    <FolderList/>
  </div>;
}
