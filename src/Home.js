import React, { useEffect, useState } from "react";
import { useEth } from "./contexts/EthContext";
import "./Home.css";
import Web3 from "web3";

export default function Home() {
  const [inputNumber, setInputNumber] = useState("");
  const [value, setValue] = useState();
  const {
    state: { contract, accounts },
  } = useEth();

  useEffect(() => {
    const getValue = async () => {
      try {
        if (contract) {
          const val = await contract.methods.count().call();
          setValue(val);
          console.log(val);
        }
      } catch (err) {
        console.log("err in val", err);
      }
    };

    getValue();
  }, [contract]);

  const handleSendButton = async () => {
    try {
      const res = await contract?.methods
        .addAmount(inputNumber)
        .send({ from: accounts[0] });
      console.log("res from addAmount", res);
    } catch (err) {
      console.log("err in addAmount", err);
    }
  };

  const handleSendFreeButton = async () => {
    try {
      var web3 = new Web3();
    } catch (err) {}
  };
  return (
    <div className="home">
      <h2>Unknown</h2>
      <h3>My Token {value}</h3>
      <div className="inputAmountBox">
        <p style={{ marginRight: "5px" }}>Enter Amount </p>
        <div className="input">
          <input
            type="number"
            placeholder="0"
            min={0}
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="buttonContainer">
        <div className="button" onClick={handleSendButton}>
          Send
        </div>
      </div>
      <div className="buttonContainer">
        <div className="button" onClick={handleSendButton}>
          Send Free
        </div>
      </div>
    </div>
  );
}
