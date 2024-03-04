import "./Offcanvas.css";

const Offcanvas = ({ children, onClose }) => {
  return (
    <>
      <div className="backdrop" onClick={onClose}>
        <div className="offcanvas">
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Offcanvas;
