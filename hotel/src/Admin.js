import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Showtable from "./showtable";

const Admin = () => {
  const [showtable, settable] = useState(false);
  const [orderdata, setdata] = useState([]);
  const [showtable2, settable2] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:3002/find/findAllOrders")
      .then((res) => {
        setdata(res.data);
      })
      .catch((error) => console.log(error));
  }, [showtable]);

  useEffect(() => {
    if (emailRef.current.value) {
      let baseurl =
        "http://localhost:3002/find/findorder/" + emailRef.current.value;
      axios
        .get(baseurl)
        .then((res) => {
          setdata(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [showtable2]);

  return (
    <div>
      <h1>Admin console</h1>
      <button
        onClick={() => {
          settable(true);
          console.log(orderdata);
        }}
      >
        Find All Orders
      </button>
      <br></br>
      <br></br>
      {console.log(orderdata)}
      {showtable && <Showtable orderdata={orderdata}></Showtable>}
      <br></br>
      <br></br>
      Email id :
      <input type="text" name="email" id="email" ref={emailRef} />
      <button
        onClick={() => {
          settable2(true);
        }}
      >
        Find Order
      </button>
      {showtable2 && <Showtable orderdata={orderdata}></Showtable>}
    </div>
  );
};

export default Admin;
