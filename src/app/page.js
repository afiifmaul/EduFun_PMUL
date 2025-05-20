import MediaPlayer from "./components/MediaPlayer";
import CourseCard from "./components/CourseCard";
import QuizCard from "./components/QuizCard";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Selamat Datang di EduFun</h1>
          <p className="text-gray-600 mb-2">
            Temukan pembelajaran interaktif dengan konten multimedia seperti
            video, audio, kuis, dan lainnya untuk mendukung proses belajar.
          </p>
        </div>
        <MediaPlayer src="/media/hua.mp4" type="video" />{" "}
        {/* src="/media/nama_file.mp4" ini bisa diganti sesuai kebutuhan */}
      </section>

      {/* Courses section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Courses</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <CourseCard
            id="matematika"
            title="Matematika Dasar"
            description="Pelajari konsep dasar matematika untuk SMP."
          />
          <CourseCard
            id="bahasa"
            title="Bahasa Indonesia"
            description="Tingkatkan kemampuan membaca dan menulis."
          />
          <CourseCard
            id="ipa"
            title="IPA Terpadu"
            description="Eksplorasi ilmu pengetahuan alam secara menyeluruh."
          />
        </div>
      </section>

      {/* Quiz section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Quiz</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <QuizCard title="Kuis Matematika" href="/quiz/matematika" />
          <QuizCard title="Kuis Bahasa" href="/quiz/bahasa" />
        </div>
      </section>
    </div>
  );
}
