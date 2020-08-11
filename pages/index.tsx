import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import Input from "../components/Common/Input/Input";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Welcome to Pokemon Fan Page</h1>
      <Input name="pokemon" id="pokemon" label="Find a Pokemon" />
    </Layout>
  );
};

export default Home;
