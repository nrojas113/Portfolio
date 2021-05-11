import React from "react";
const requestImageFile = require.context("../../media", false, /.png$/);

function SingleProjectBack(prop) {
  const { imageName, title, teckStack, setFlip, longDescription } = prop;
  return (
    <>
      <div id="projects_body_single--image">
        <img
          src={requestImageFile(`./${imageName}_mockup.png`)}
          loading="lazy"
          alt={`Main page image for ${title}`}
        />
      </div>
      <div id="projects_body_single--description">
        <p>{longDescription}</p>
        <p>Teck Stack: {teckStack}</p>
      </div>
      <div id="projects_body_single--arrow">
        <button type="button" onClick={() => setFlip(false)}>
          Back
        </button>
      </div>
    </>
  );
}

export default SingleProjectBack;
