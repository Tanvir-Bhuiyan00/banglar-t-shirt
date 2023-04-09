import React, { useContext } from "react";
import Counsin from "../Cousin/Counsin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p>
        <small>Grandpa Money: {money}</small>
      </p>
      <button onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
      <section className="flex">
        <Counsin>nabil</Counsin>
        <Counsin>nabilaa</Counsin>
      </section>
    </div>
  );
};

export default Uncle;
