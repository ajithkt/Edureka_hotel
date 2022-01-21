import React from "react";
import "./showtable.css";

const compareDate = (orderdate) => {
  let currentDate = new Date();
  let yestDate = new Date();
  let twoDays = new Date();
  let orderdatereceived = new Date(orderdate);
  yestDate.setDate(currentDate.getDate() - 1);
  twoDays.setDate(currentDate.getDate() - 2);
  let currentDate_format =
    currentDate.getDate() +
    "/" +
    currentDate.getMonth() +
    "/" +
    currentDate.getFullYear();
  let orderdatereceived_format =
    orderdatereceived.getDate() +
    "/" +
    orderdatereceived.getMonth() +
    "/" +
    orderdatereceived.getFullYear();
  let yestDate_format =
    yestDate.getDate() +
    "/" +
    yestDate.getMonth() +
    "/" +
    yestDate.getFullYear();
  let twoDays_format =
    twoDays.getDate() + "/" + twoDays.getMonth() + "/" + twoDays.getFullYear();
  if (orderdatereceived_format === currentDate_format) {
    return "In Progress";
  } else if (orderdatereceived_format === yestDate_format) {
    return "Dispatched";
  } else if (orderdatereceived_format <= twoDays_format) {
    console.log(orderdatereceived.getTime());
    console.log(twoDays.getTime());
    return "Delivered";
  } else {
    return "Wrong Date";
  }
};

const sendemail = () => {
  console.log("Sending email");
};

export default function showtable(props) {
  console.log(props);
  const { orderdata } = props;
  return (
    <div>
      <table className="table">
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Order Items</th>
          <th>Order Status</th>
          <th>Send Email</th>
        </tr>

        {orderdata.map((element) => {
          return (
            <tr key={element.username}>
              <td>
                <button onClick={sendemail}>SendEmail</button>
              </td>
              <td>{element.username}</td>
              <td>{element.email}</td>
              <td>{element.address}</td>
              <td>{element.orderItems.join(",")}</td>
              <td>{compareDate(element.orderDate)}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
