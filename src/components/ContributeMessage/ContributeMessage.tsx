import { FC } from "react";
import "./ContributeMessage.css";

const ContributeMessage: FC = (): JSX.Element => {
  return (
    <div className="contribute-message">
      <div className="contribute-first-line">
        <h4 className="contribute contribute-one">
          <span
            role="img"
            aria-label="hand waving emoji"
            className="hand-emoji"
          >
            👋
          </span>
          <div className="contribute-first-line-text">
            Want to contribute to facebook/react?
          </div>
        </h4>
      </div>
      <p className="contribute contribute-two">
        If you have a bug or an idea, read the
        <span>
          <a href="/" className="contributing-link">
            {" "}
            contributing guidelines{" "}
          </a>
        </span>
        before opening an issue.
      </p>
    </div>
  );
};

export default ContributeMessage;
