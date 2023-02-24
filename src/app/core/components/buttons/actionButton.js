import React, { useState } from 'react';
import './actionButton.scss';

// themes of buttons: primary, secondary, light, dark
const ActionButton = (props) => {
  const [infoDisplay, setInfoDisplay] = useState(false);
  var { name, infoContent, infoContentPosition, onClick, theme } = props.config;
  const infoContentPresent = (infoContent !== undefined && infoContent !== null);

  if(name === undefined || name === null) return;

  switch (infoContentPosition) {
    case "left":
    case "right":
    case "top":
    case "bottom":
      break;
    case null:
    case undefined:
    default:
      infoContentPosition = "left";
      break;
  }

  if(onClick === undefined || onClick === null) onClick = () => {};

  switch (theme) {
    case "primary":
    case "secondary":
    case "light":
    case "dark":
      break;
    case null:
    case undefined:
    default:
      theme = "primary";
      break;
  }

  const onHoverButton = (e) => {
    if(e.target.tagName !== "BUTTON" || !infoContentPresent) return;
    
    setInfoDisplay(_ => true);

    var button = e.target;
    button.querySelector(".info").style.padding = "4px";
  }

  const outHoverButton = (e) => {
    if(e.target.tagName !== "BUTTON" || !infoContentPresent) return;

    setTimeout(function() {
      setInfoDisplay(_ => false);

      var button = e.target;
      button.querySelector(".info").style.padding = "0";
    }, 250);
  }
  
  return (
    <button className={"bt-rjs-action-btn box-shadow " + theme} onMouseEnter={onHoverButton} onMouseLeave={outHoverButton} onClick={onClick}>
      {name}
      {infoContentPresent && 
        <div className={'info ' + infoContentPosition}>{
          infoDisplay && infoContentComponent(infoContent)
        }</div>
      }
    </button>
  )
}

const infoContentComponent = (infoContent) => {
  return (
    <React.Fragment>
      <div className='tri-arrow'></div> {infoContent}
    </React.Fragment>
  );
}

export default ActionButton;