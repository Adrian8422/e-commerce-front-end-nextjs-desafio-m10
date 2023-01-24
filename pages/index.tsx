import type { NextPage } from "next";
import { TextField } from "ui/textfield";
import { SubTitle, Title } from "ui/texts";
import { Card } from "ui/card";
import { Twitter, Instagram } from "ui/icons";
import { Logo } from "ui/logo";
import { useRouter } from "next/router";

import { Layout } from "components/layout";
import { HomePage } from "components/home-page";

const Home: NextPage = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <Layout>
      <HomePage query={q} />
    </Layout>
  );
};
export default Home;
