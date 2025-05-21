import { quizzes } from "../../data/quizzes";
import QuizForm from "../../components/QuizForm";
export default function QuizDetailPage({ params }) {
  const quiz = quizzes[params.id];
  if (!quiz) return <div>Kuis tidak ditemukan.</div>;
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{quiz.title}</h1>
      <QuizForm questions={quiz.questions} />
    </div>
  );
}
