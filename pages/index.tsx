import { MongoClient } from "mongodb";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { Experience, History } from "@/types/History";
import { Contact } from "@/components/Contact/Contact";
import { Introduction } from "@/components/Introduction/Introduction";
import { Timeline } from "@/components/Timeline/Timeline";
import { ViewProvider } from "@/components/View/View";
import "@/style/global.css";

export default function HomePage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{"Cassandra O'Connell"}</title>
        <meta
          name="description"
          content="Personal site for SWE Cassandra O'Connell"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ViewProvider>
          <Introduction />
          {data.history ? <Timeline history={data.history} /> : null}
          <Contact />
        </ViewProvider>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const uri = process.env.MONGO_DB_CONNECTION_STRING;
  let history: History | undefined = undefined;

  if (uri) {
    const client = new MongoClient(uri);

    try {
      const database = client.db("timeline");

      const experiences = await database
        .collection<Omit<Experience, "end"> & { end: number | null }>(
          "experiences"
        )
        .find({}, { sort: { start: -1 } })
        .toArray();

      history = {
        experience: experiences.map(({ _id, ...experience }) => ({
          ...experience,
          end: experience.end || Date.now(),
        })),
      };
    } catch (error) {
      // TODO - log somewhere
    } finally {
      await client.close();
    }
  }

  return {
    props: {
      data: {
        history,
      },
    },
  };
};
