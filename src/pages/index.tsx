import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { requireAuth } from "~/common/requireAuth";
import { getServerAuthSession } from "~/server/auth";

export const getServerSideProps = requireAuth(async (ctx) => {
  const session = await getServerAuthSession(ctx);
  return {
    props: { session },
  };
});

const Dashboard = () => {
  const { data: session, status } = useSession();

  return (
    <>
      Signed in as {session!.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default Dashboard;
