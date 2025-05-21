import QuizCard from "../components/QuizCard";
import { courses } from "../data/courses";
export default function QuizPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Kuis Tersedia</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((c) => (
          <QuizCard
            key={c.id}
            title={`Kuis ${c.title}`}
            href={`/quiz/${c.id}`}
          />
        ))}
      </div>
    </div>
  );
}
