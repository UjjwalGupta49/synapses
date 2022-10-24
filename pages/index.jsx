import { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";
import { profile } from "./[id]";
import components from "../components/index";
import { SolanaLogo } from "../public/solanaLogo.svg";
const Home = () => {
  const [getSolName, setSolName] = useState("");
  const [profileLink, setProfileLink] = useState("");

  const submitSolName = (e) => {
    e.preventDefault();
    if (getSolName) {
      console.log(getSolName);
      setProfileLink(`/${getSolName}.sol`);
      console.log(`profile link: http://localhost:3000/${getSolName}`);
    }
  };

  return (
    <div className="flex min-h-screen m-0 p-0 flex-wrap justify-center items-center bg-gradient-to-r from-orange-300 to-rose-300">
      <Head>
        <title>Identifyme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-slate-900">
        <form onSubmit={submitSolName}>
          <Input
            label="Enter .sol name"
            labelRight= ".sol"
            status="default"
            placeholder="ujjwal49"
            onChange={(e) => {
              setSolName(e.target.value);
            }}
          />
          <br />
          <div className="pt-10 pr-5">
            {profileLink ? (
              <Link href={profileLink}>
                <a>
                  <Button bordered color="gradient" className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-slate-700">
                    Check your profile 💁
                  </Button>
                </a>
              </Link>
            ) : (
              <Button
                bordered
                type="submit"
                className="bg-blue-600 text-white"
                onChange={() => {
                  submitSolName;
                }}
              >
                Identify ❓
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
