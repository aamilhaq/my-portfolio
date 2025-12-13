import Head from "next/head";
import FloatingNetwork from "@/components/FloatingNetwork";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio – Renaissance Edition</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* HERO SECTION (placeholder) */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3f1e7",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Hero Goes Here
      </section>

      {/* FULLSCREEN FLOATING NETWORK */}
      <FloatingNetwork />

      {/* PROJECTS SECTION (placeholder) */}
      <section
        style={{
          minHeight: "100vh",
          background: "#fafafa",
          padding: "4rem",
          fontSize: "2rem",
        }}
      >
        Project Grid Goes Here
      </section>
    </>
  );
}
