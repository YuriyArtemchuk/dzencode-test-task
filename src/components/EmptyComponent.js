import { Link } from "react-router-dom";
import Button from "./UI/Button";
import "./EmptyComponent.scss";

const EmptyComponent = ({ link }) => {
  return (
    <div className="empty-block">
      <div className="content">
        <div className="text">Sorry, there are nothing special for you!</div>
        <div className="block-link">
          <Link to={link} className="link">
            But not here!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyComponent;
