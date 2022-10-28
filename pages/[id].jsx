import { useRouter } from "next/router";
import { Spacer } from "@nextui-org/react";
import styles from "../styles/static.module.css";
import components from "../components";

const profile = (props) => {
  const router = useRouter();
  const user = router.query.id;
  return (
    <div className="min-h-screen m-0 " style={{ backgroundColor: "#CCE6FF" }}>
      <components.Navbar />
      <Spacer />
      <div style={{ display: "flex", justifyContent: "center", position: "absolute", width:"100%"}}>
        <components.ProfilePic />
      </div>
      <components.Banner className="relative" />

      {/* <p className="text-center font-semibold text-black text-2xl">gm! {user} 👋</p> */}
    </div>
  );
};

export default profile;

// resolve .sol name to pubkey, getting data for Wordcel articles, dilalect user name,
// 1 tailwind spacing uint = 4px