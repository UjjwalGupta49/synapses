import { useRouter } from "next/router";
import { Spacer } from "@nextui-org/react";
import styles from "../styles/static.module.css";
import components from "../components";
import Head from "next/head";
import { getDomainKey, NameRegistryState } from "@bonfida/spl-name-service";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { Button, Grid } from "@nextui-org/react";
import { useEffect, useState } from "react";

const profile = (props) => {
  const router = useRouter();
  const user = router.query.id;
  const [owner, setOwner] = useState("");
  const Domain = () => {
    const domainName = `${user}`; // With or without the .sol at the end

    const connection = new Connection(
      clusterApiUrl("mainnet-beta"),
      "confirmed"
    );

    const getPubkey = async () => {
      const { pubkey } = await getDomainKey(domainName);

      const { registry } = await NameRegistryState.retrieve(connection, pubkey);
      setOwner(registry.owner);

      console.log(`Owner: ${registry.owner}`);
    };
    useEffect(() => {
      getPubkey();
    }, [domainName]);

    return (
      <div>
        <p></p>
      </div>
    );
  };
  return (
    <Grid.Container>
      <div className="min-h-screen m-0 " style={{ backgroundColor: "#CCE6FF" }}>
        <Head>
          <title>{`${user}'s profile`}</title>
        </Head>
        {Domain()}
        <Grid>
          <components.Navbar name={`${user}`} />
        </Grid>
        <Spacer />
        <Grid justify="center" className="pt-45" >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              width: "100%",
              alignContent: "center",
              paddingTop: "120px"
            }}
          >
            <components.ProfilePic />
          </div>
        </Grid>
        <Grid>
          <components.Banner className="relative" />
        </Grid>
      </div>
      <Grid>

      </Grid>
    </Grid.Container>
  );
};

export default profile;

// resolve .sol name to pubkey, getting data for Wordcel articles, dilalect user name,
// 1 tailwind spacing uint = 4px
