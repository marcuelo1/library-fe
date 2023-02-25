import React, { Component } from 'react';
import ReadingMaterialCard from '../../home/views/readingMaterialCard';
import "../stylesheets/index.scss"

class NewspapersIndexView extends Component {
  state = {  } 
  render() { 
    return (
      <div id="newspapers-index-view">
        <ul className="reading-materials">
          <li>
            <ReadingMaterialCard type="Newspaper" />
          </li>
          <li>
            <ReadingMaterialCard type="Newspaper" />
          </li>
          <li>
            <ReadingMaterialCard type="Newspaper" />
          </li>
          <li>
            <ReadingMaterialCard type="Newspaper" />
          </li>
          <li>
            <ReadingMaterialCard type="Newspaper" />
          </li>
          <li>
            <ReadingMaterialCard type="Newspaper" />
          </li>
          <li>
            <ReadingMaterialCard type="Newspaper" />
          </li>
          <li>
            <ReadingMaterialCard type="Newspaper" />
          </li>
          <li>
            <ReadingMaterialCard type="Newspaper" />
          </li>
          <li>
            <ReadingMaterialCard type="Newspaper" />
          </li>
          <li>
            <ReadingMaterialCard type="Newspaper" />
          </li>
          <li>
            <ReadingMaterialCard type="Newspaper" />
          </li>
        </ul>
      </div>
    );
  }
}
 
export default NewspapersIndexView;