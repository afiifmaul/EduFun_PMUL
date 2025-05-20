import QuizCard from "../components/QuizCard";

export default function QuizPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-4">Kuis Tersedia</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <QuizCard title="Kuis Matematika" href="/quiz/matematika" />
        {/* Tambahkan kuis lainnya di sini */}
      </div>
    </div>
  );
}
