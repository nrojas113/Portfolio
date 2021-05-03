import React from "react";

function SingleProjectBack({ flip }) {
  return (
    <div className="back">
      <h1>Back of the card</h1>
      <p>Background of project: This was for Mintbean's GraphQL Learnathon.</p>
      <p>Teck Stack: React, Redux, Bootstrap, Express, Node.js</p>
      <p>Challenge: Deployment, Netflix API</p>
      <div onClick={flip}>More Details</div>
    </div>
  );
}

export default SingleProjectBack;
