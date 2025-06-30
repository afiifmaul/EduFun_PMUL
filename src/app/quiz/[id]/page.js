// app/quiz/[id]/page.js
import { quizzes } from "../../data/quizzes";
import QuizForm from "../../components/QuizForm";

export default async function QuizDetailPage({ params }) {
  const quiz = quizzes[params.id];
  if (!quiz) {
    return <div className="p-6">Kuis tidak ditemukan.</div>;
  }

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">{quiz.title}</h1>
      <QuizForm questions={quiz.questions} />
    </div>
  );
}
