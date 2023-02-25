import React, { Component } from 'react';
import ReadingMaterialCard from '../../home/views/readingMaterialCard';
import "../stylesheets/index.scss"

class ThesesIndexView extends Component {
  state = {  } 
  render() { 
    return (
      <div id="theses-index-view">
        <ul className="reading-materials">
          <li>
            <ReadingMaterialCard type="Thesis" />
          </li>
          <li>
            <ReadingMaterialCard type="Thesis" />
          </li>
          <li>
            <ReadingMaterialCard type="Thesis" />
          </li>
          <li>
            <ReadingMaterialCard type="Thesis" />
          </li>
          <li>
            <ReadingMaterialCard type="Thesis" />
          </li>
          <li>
            <ReadingMaterialCard type="Thesis" />
          </li>
          <li>
            <ReadingMaterialCard type="Thesis" />
          </li>
          <li>
            <ReadingMaterialCard type="Thesis" />
          </li>
          <li>
            <ReadingMaterialCard type="Thesis" />
          </li>
          <li>
            <ReadingMaterialCard type="Thesis" />
          </li>
          <li>
            <ReadingMaterialCard type="Thesis" />
          </li>
          <li>
            <ReadingMaterialCard type="Thesis" />
          </li>
        </ul>
      </div>
    );
  }
}
 
export default ThesesIndexView;