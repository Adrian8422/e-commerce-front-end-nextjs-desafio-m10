import type { NextPage } from "next";
import { TextField } from "ui/textfield";
import { SubTitle, Title } from "ui/texts";
import { Card } from "ui/card";
import { Twitter, Instagram } from "ui/icons";
import { Logo } from "ui/logo";
import { useRouter } from "next/router";

import { Layout } from "components/layout";
import { HomePage } from "components/home-page";

function handleSubmit(e: any) {
  e.preventDefault();
  console.log(e.target.name.value);
}

const Home: NextPage = () => {
  const router = useRouter();
  const { q } = router.query;
  console.log({ q });

  return (
    <Layout>
      <HomePage query={q} />
    </Layout>
  );
};
export default Home;
