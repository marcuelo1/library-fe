import "./modal.scss";

const Modal = (props) => {

  const closeModal = (e) => {
    var modal = e.target.closest(".bt-rjs-modal")
    
    modal.classList.add("hide")

    // reset form
    if(modal.querySelector("form") != null) {
      modal.querySelector("form").reset()
    }
  }

  var isHide = props.isHide === undefined ? false : props.isHide

  return (
    <div className={"bt-rjs-modal " + (isHide ? 'hide' : '')} id={props.id}>
      <div className="bt-rjs-modal-bg" onClick={closeModal}></div>
      <div className="bt-rjs-modal-container">
        <div className="bt-rjs-modal-header">
          <div className="bt-rjs-modal-header-title">{props.title}</div>
          <div className="bt-rjs-modal-header-close-btn" onClick={closeModal}>X</div>
        </div>
        <div className="bt-rjs-modal-content">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal;