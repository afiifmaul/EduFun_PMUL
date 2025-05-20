import { courses } from "../../data/courses";

export default function QuizDetail({ params }) {
  const course = courses.find((c) => c.id === params.id);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Kuis {course.title}</h1>
      <p>Soal dan pilihan untuk {course.title} akan ditampilkan di sini.</p>
    </div>
  );
}
