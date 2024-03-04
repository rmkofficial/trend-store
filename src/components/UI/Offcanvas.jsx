import "./Offcanvas.css";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose}></div>;
};
const OffcanvasOverlay = ({ children }) => {
  return (
    <div className="offcanvas">
      <div className="content">{children}</div>
    </div>
  );
};

const Offcanvas = ({ children, onClose }) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <OffcanvasOverlay>{children}</OffcanvasOverlay>,
        portalElement
      )}
    </>
  );
};

export default Offcanvas;
