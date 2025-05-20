import MediaPlayer from "./components/MediaPlayer";
import CourseCard from "./components/CourseCard";
import QuizCard from "./components/QuizCard";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Selamat Datang di EduMedia
          </h1>
          <p className="text-gray-600 mb-2">
            Temukan pembelajaran interaktif dengan konten multimedia seperti
            video, audio, kuis, dan lainnya untuk mendukung proses belajar.
          </p>
        </div>
        <MediaPlayer src="/uploads/intro-video.mp4" type="video" />
      </section>

      {/* Courses section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Courses</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <CourseCard
            title="Matematika Dasar"
            description="Pelajari konsep dasar matematika untuk SMP."
          />
          <CourseCard
            title="Bahasa Indonesia"
            description="Tingkatkan kemampuan membaca dan menulis."
          />
          <CourseCard
            title="IPA Terpadu"
            description="Eksplorasi ilmu pengetahuan alam secara menyeluruh."
          />
        </div>
      </section>

      {/* Quiz section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Quiz</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <QuizCard title="Kuis Geografi" href="/quiz/geografi" />
          <QuizCard title="Kuis Matematika" href="/quiz/matematika" />
        </div>
      </section>
    </div>
  );
}
