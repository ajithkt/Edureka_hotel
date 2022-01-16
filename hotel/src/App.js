import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [orderItems, setorderItems] = useState("");
  let data;

  const SubmitHandler = (e) => {
    e.preventDefault();
    data = {
      username: username,
      email: email,
      address: address,
      orderItems: orderItems,
    };
    console.log(data);
    axios
      .post("http://localhost:3002", data)
      .then((res) => console.log("Send the data"))
      .catch((err) => console.log(err));
  };

  const updateOrderItems = (e) => {
    setorderItems((orderItems) => [...orderItems, e.target.value]);
  };

  return (
    <div>
      <h1> Hotel </h1>
      <form onSubmit={(e) => SubmitHandler(e)}>
        Name:{" "}
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        email:{" "}
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        Address:{" "}
        <input
          type="text"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <br></br>
        <input
          type="checkbox"
          id="burger"
          name="burger"
          value="burger"
          onClick={(e) => updateOrderItems(e)}
        />
        Burger<br></br>
        <input
          type="checkbox"
          id="pizaa"
          name="pizza"
          value="pizza"
          onClick={(e) => updateOrderItems(e)}
        />
        Pizza<br></br>
        <input
          type="checkbox"
          id="pasta"
          name="pasta"
          value="pasta"
          onClick={(e) => updateOrderItems(e)}
        />
        Pasta<br></br>
        <input
          type="checkbox"
          id="rice"
          name="rice"
          value="rice"
          onClick={(e) => updateOrderItems(e)}
        />
        Rice<br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
