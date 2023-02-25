import React, { Component } from 'react';
import ReadingMaterialCard from '../../home/views/readingMaterialCard';
import "../stylesheets/index.scss"

class MagazinesIndexView extends Component {
  state = {  } 
  render() { 
    return (
      <div id="magazines-index-view">
        <ul className="reading-materials">
          <li>
            <ReadingMaterialCard type="Magazine" />
          </li>
          <li>
            <ReadingMaterialCard type="Magazine" />
          </li>
          <li>
            <ReadingMaterialCard type="Magazine" />
          </li>
          <li>
            <ReadingMaterialCard type="Magazine" />
          </li>
          <li>
            <ReadingMaterialCard type="Magazine" />
          </li>
          <li>
            <ReadingMaterialCard type="Magazine" />
          </li>
          <li>
            <ReadingMaterialCard type="Magazine" />
          </li>
          <li>
            <ReadingMaterialCard type="Magazine" />
          </li>
          <li>
            <ReadingMaterialCard type="Magazine" />
          </li>
          <li>
            <ReadingMaterialCard type="Magazine" />
          </li>
          <li>
            <ReadingMaterialCard type="Magazine" />
          </li>
          <li>
            <ReadingMaterialCard type="Magazine" />
          </li>
        </ul>
      </div>
    );
  }
}
 
export default MagazinesIndexView;