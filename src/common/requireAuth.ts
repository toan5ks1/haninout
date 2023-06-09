import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getServerAuthSession } from "~/server/auth";

export const requireAuth =
  (func: GetServerSideProps) => async (ctx: GetServerSidePropsContext) => {
    const session = await getServerAuthSession(ctx);

    if (!session) {
      return {
        redirect: {
          destination: "/wellcome", // login path
          permanent: false,
        },
      };
    }

    return await func(ctx);
  };
