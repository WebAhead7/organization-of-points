import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import DrawBoard, { ExerciseWriter } from "./DrawBoard";
import "./style.css";
import QuestionField from "../screens/TestScreen/components/QuestionField";
import Result from "../screens/TestScreen/components/Result";
import Guide from "../screens/GuideScreen/index ";
import shapes from "../data/shapes.json";
import questions from "../data/Questions.json";
import sampleQuestion from "../data/sample-Question.json";
export default function AppTest() {
  useEffect(() => {
    window.localStorage.setItem("shapes", JSON.stringify(shapes));
    window.localStorage.setItem("questions", JSON.stringify(questions));
    window.localStorage.setItem(
      "sample-question",
      JSON.stringify(sampleQuestion)
    );
  }, []);
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route exact path="/exercises" component={QuestionField} />
        <Route exact path="/" component={Guide} />
        <Route exact path="/admin-draw" component={DrawBoard} />
        <Route exact path="/admin-exercise" component={ExerciseWriter} />
      </Switch>
      <AppFooter />
    </Router>
  );
}
