import React from "react";
import { Button, IconButton } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import ExamSteps from "../../../components/ExamSteps";
import shapes from "../../../data/data.json";
import ShapesInfo from "./ShapesInfo";
import { adjustShapeToBoard } from "../../../utils/boardUtils";
import AnswerField from "./AnswerField";

const currentShape = adjustShapeToBoard(shapes[0], 240);

function QuestionField() {
  return (
    <div className="main-question-container">
      <ExamSteps />
      <div className="question-section">
        <div className="question-timer">
          <div className="question">
            <svg className="shapes">
              <ShapesInfo />
            </svg>
            <svg className="shapes"></svg>
          </div>
        </div>
        <div className="answer-section">
          <IconButton
            aria-label="previous"
            style={{ dropShadow: "1px 3px 19px #9e9e9e" }}
          >
            <ChevronLeftIcon style={{ fontSize: 40 }} />
          </IconButton>
          <AnswerField
            className={["svg-draw-container", "shapes solution"]}
            points={[
              { x: 100, y: 100 },
              { x: 200, y: 100 },
              { x: 200, y: 200 },
            ]}
          />

          <IconButton
            aria-label="next"
            style={{ dropShadow: "1px 3px 19px #9e9e9e" }}
          >
            <ChevronRightIcon style={{ fontSize: 40 }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default QuestionField;
