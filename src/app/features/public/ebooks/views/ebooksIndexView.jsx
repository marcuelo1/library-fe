import React, { Component } from 'react';
import ReadingMaterialCard from '../../home/views/readingMaterialCard';
import "../stylesheets/index.scss"

class EbooksIndexView extends Component {
  state = {  } 
  render() { 
    return (
      <div id="ebooks-index-view">
        <ul className="reading-materials">
          <li>
            <ReadingMaterialCard type="E-Book" />
          </li>
          <li>
            <ReadingMaterialCard type="E-Book" />
          </li>
          <li>
            <ReadingMaterialCard type="E-Book" />
          </li>
          <li>
            <ReadingMaterialCard type="E-Book" />
          </li>
          <li>
            <ReadingMaterialCard type="E-Book" />
          </li>
          <li>
            <ReadingMaterialCard type="E-Book" />
          </li>
          <li>
            <ReadingMaterialCard type="E-Book" />
          </li>
          <li>
            <ReadingMaterialCard type="E-Book" />
          </li>
          <li>
            <ReadingMaterialCard type="E-Book" />
          </li>
          <li>
            <ReadingMaterialCard type="E-Book" />
          </li>
          <li>
            <ReadingMaterialCard type="E-Book" />
          </li>
          <li>
            <ReadingMaterialCard type="E-Book" />
          </li>
        </ul>
      </div>
    );
  }
}
 
export default EbooksIndexView;