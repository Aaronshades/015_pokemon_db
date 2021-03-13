import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../../components/Layout/Layout";

const FirstGen = ({ firstGenPokemon }) => {
  console.log(firstGenPokemon);

  return (
    <Layout>
      <h1>1st generation</h1>
      <ul>
        {/* pokemon &&
          pokemon.results.map((pokemon) => {
            return <li key={pokemon.name}>{pokemon.name}</li>;
          }) */}
      </ul>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const pokemon = await res.json();
  console.log(pokemon);
  
  const firstGenPokemon = [];

  await pokemon.results.forEach(async (pokemon) => {
    let res = await fetch(pokemon.url);
    if (res) {
      const pokemon = await res.json();
      firstGenPokemon.push(pokemon);
    }
  });

  console.log("ARRAY OF POKEMON FROM getServer", firstGenPokemon);

  return {
    props: {
      firstGenPokemon,
    },
  };
};

export default FirstGen;
