import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);

  return (
    <div>
      <h2 className="my-style">{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tell}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tell="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="Mark Anderson"
      img="https://static.independent.co.uk/2022/01/20/21/kiefer_sutherland_bloorstreet_labelshots-7.jpg?quality=50&width=640&auto=webp"
      tell="+9770399383"
      email="anderson@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
