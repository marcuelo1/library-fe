import React, { Component } from 'react';
import ReadingMaterialCard from '../../home/views/readingMaterialCard';
import "../stylesheets/index.scss"

class BooksIndexView extends Component {
  state = {  } 
  render() { 
    return (
      <div id="books-index-view">
        <ul className="reading-materials">
          <li>
            <ReadingMaterialCard type="Book" />
          </li>
          <li>
            <ReadingMaterialCard type="Book" />
          </li>
          <li>
            <ReadingMaterialCard type="Book" />
          </li>
          <li>
            <ReadingMaterialCard type="Book" />
          </li>
          <li>
            <ReadingMaterialCard type="Book" />
          </li>
          <li>
            <ReadingMaterialCard type="Book" />
          </li>
          <li>
            <ReadingMaterialCard type="Book" />
          </li>
          <li>
            <ReadingMaterialCard type="Book" />
          </li>
          <li>
            <ReadingMaterialCard type="Book" />
          </li>
          <li>
            <ReadingMaterialCard type="Book" />
          </li>
          <li>
            <ReadingMaterialCard type="Book" />
          </li>
          <li>
            <ReadingMaterialCard type="Book" />
          </li>
        </ul>
      </div>
    );
  }
}
 
export default BooksIndexView;