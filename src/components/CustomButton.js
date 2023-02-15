import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomButton({ txt, color, onBtnClick }) {
  return (
    <Button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onBtnClick}
    >
      {txt}
    </Button>
  );
}

CustomButton.defaultProps = {
  color: "steelblue",
};
export default CustomButton;