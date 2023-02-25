import React from 'react';
import "../stylesheets/readingMaterialCard.scss";

const ReadingMaterialCard = (props) => {
  const { type } = props
  var img = ""

  switch (type) {
    case "Book":
      img = require("../../../../core/assets/icons/book.png")
      break;
  
    case "Magazine":
      img = require("../../../../core/assets/icons/magazine.png")
      break;
  
    case "E-Book":
      img = require("../../../../core/assets/icons/ebook.png")
      break;
  
    case "Thesis":
      img = require("../../../../core/assets/icons/thesis.png")
      break;
  
    case "Newspaper":
      img = require("../../../../core/assets/icons/newspaper.png")
      break;
  }

  return (
    <div className="reading-material-card">
      <div className="icon">
        <img src={img} alt="" />
      </div>
      <div className="reading-material-title">{type}</div>
    </div>
  )
}

export default ReadingMaterialCard;