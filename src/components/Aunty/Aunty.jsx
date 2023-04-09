import React from "react";
import Counsin from "../Cousin/Counsin";

const Aunty = () => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Counsin hasFriend={true}>Abir</Counsin>
        <Counsin>Nibir</Counsin>
      </section>
    </div>
  );
};

export default Aunty;
