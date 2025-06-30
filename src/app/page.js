import MediaPlayer from "./components/MediaPlayer";
import CourseCard from "./components/CourseCard";
import QuizCard from "./components/QuizCard";
import { courses } from "./data/courses";
import { quizzes } from "./data/quizzes";
import Chatbot from "./components/Chatbot"; // Tambahkan ini

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-10">
        <div>
          <h1 className="text-3xl font-bold mb-4">Selamat Datang di EduFun</h1>
          <p className="text-gray-600 mb-2">
            Temukan pembelajaran interaktif dengan konten multimedia seperti
            video, audio, kuis, dan lainnya untuk mendukung proses belajar.
          </p>
        </div>
        <MediaPlayer src="/media/pembelajaran.mp4" type="video" />
      </section>

      {/* Courses section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard
              key={c.id}
              id={c.id}
              title={c.title}
              description={c.description}
            />
          ))}
        </div>
      </section>

      {/* Quiz section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Quiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.values(quizzes).map((q) => (
            <QuizCard
              key={q.title}
              title={q.title}
              href={`/quiz/${q.title.toLowerCase().split(" ")[1]}`}
            />
          ))}
        </div>
      </section>

      {/* Chatbot muncul di semua halaman */}
      <Chatbot />
    </div>
  );
}
