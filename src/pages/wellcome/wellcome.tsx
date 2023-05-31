import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "~/components/home/home";
import { Layout } from "~/components/layout";
import { useSession } from "next-auth/react";

const Wellcome = () => {
  return (
    <>
      <Head>
        <title>Haniout</title>
        <meta name="homepage" content="register-trading-account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
};

export default Wellcome;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
