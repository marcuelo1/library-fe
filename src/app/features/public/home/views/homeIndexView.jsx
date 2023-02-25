import React, { Component } from 'react';
import "../stylesheets/index.scss";
import ReadingMaterialCard from './readingMaterialCard';

class HomeIndexView extends Component {
  state = {  } 
  render() { 
    return (
      <div id="home-index-view">
        <div className='section' id="featured">
          <div className="title">Featured</div>
          <div className="reading-materials">
            <ReadingMaterialCard type="Book" />
            <ReadingMaterialCard type="Magazine" />
            <ReadingMaterialCard type="E-Book" />
            <ReadingMaterialCard type="Thesis" />
            <ReadingMaterialCard type="Newspaper" />
            <ReadingMaterialCard type="Book" />
            <ReadingMaterialCard type="Magazine" />
            <ReadingMaterialCard type="E-Book" />
            <ReadingMaterialCard type="Thesis" />
            <ReadingMaterialCard type="Newspaper" />
          </div>
        </div>
        <div className="section" id="new-arrivals">
          <div className="title">New Arrivals</div>
          <div className="reading-materials">
            <ReadingMaterialCard type="Book" />
            <ReadingMaterialCard type="Magazine" />
            <ReadingMaterialCard type="E-Book" />
            <ReadingMaterialCard type="Thesis" />
            <ReadingMaterialCard type="Newspaper" />
            <ReadingMaterialCard type="Book" />
            <ReadingMaterialCard type="Magazine" />
            <ReadingMaterialCard type="E-Book" />
            <ReadingMaterialCard type="Thesis" />
            <ReadingMaterialCard type="Newspaper" />
          </div>
        </div>
      </div>
    );
  }
}
 
export default HomeIndexView;