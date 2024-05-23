import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
// import quiz selector
import { selectQuizzes } from "./quizzesSlice";

export default function Quiz() {
  const quizzes = useSelector(selectQuizzes); // replace this with a call to your selector to get all the quizzes in state
  const { quizId } = useParams(); // Get quizId from URL parameters
  const quiz = quizzes[quizId]; // Find the quiz in state by its ID

  if(!quiz) {
    return <Navigate to={ROUTES.quizzesRoute()} replace/>
  } // If quiz is not found, redirect to the quizzes list page


  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
