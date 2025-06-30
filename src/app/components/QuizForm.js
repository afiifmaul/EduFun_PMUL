// app/components/QuizForm.js
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Fisher–Yates shuffle (client-only)
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuizForm({ questions }) {
  const router = useRouter();

  // Shuffle once on client mount
  const [shuffled, setShuffled] = useState(questions);
  useEffect(() => {
    setShuffled(shuffleArray(questions));
  }, [questions]);

  const total = shuffled.length;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const q = shuffled[current];
  const isLast = current === total - 1;

  const handleChange = (v) => {
    setAnswers((prev) => ({ ...prev, [q.id]: v }));
  };

  const handleSubmit = () => {
    let correct = 0,
      totalMCQ = 0;
    shuffled.forEach((item) => {
      if (item.type === "mcq") {
        totalMCQ++;
        if (answers[item.id] === item.answer) correct++;
      }
    });
    setScore({ correct, total: totalMCQ });
  };

  if (score) {
    return (
      <div className="p-6 space-y-6">
        <button
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 bg-amber-400 text-black rounded hover:bg-amber-500 transition"
        >
          Kembali
        </button>
        <div className="bg-white rounded shadow p-8 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Hasil Quiz</h2>
          <p className="text-xl">
            Kamu menjawab benar{" "}
            <span className="font-semibold">{score.correct}</span> dari{" "}
            <span className="font-semibold">{score.total}</span> soal pilihan
            ganda.
          </p>
          <button
            onClick={() => {
              setScore(null);
              setAnswers({});
              setCurrent(0);
              setShuffled(shuffleArray(questions));
            }}
            className="mt-6 px-8 py-3 bg-amber-400 text-black rounded hover:bg-amber-500 transition"
          >
            Ulangi Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-8 p-6">
      {/* Main question panel */}
      <div className="flex-1 rounded shadow p-6">
        <button
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 bg-amber-400 text-black rounded hover:bg-amber-500 transition"
        >
          Kembali
        </button>
        {/* Fixed-size question box */}
        <div className="bg-white p-6 rounded w-4xl h-96 mx-auto overflow-auto">
          <p className="mb-2 font-semibold">
            Soal {current + 1} / {total}
          </p>
          <p className="mb-4 text-lg">{q.question}</p>

          {q.options.map((opt) => (
            <label key={opt} className="block mb-3">
              <input
                type="radio"
                name={`q${q.id}`}
                value={opt}
                checked={answers[q.id] === opt}
                onChange={() => handleChange(opt)}
                className="mr-2"
                required
              />
              {opt}
            </label>
          ))}

          <button
            className="mt-2 text-sm text-blue-600 hover:underline"
            onClick={() => {
              setAnswers((prev) => {
                const c = { ...prev };
                delete c[q.id];
                return c;
              });
            }}
          >
            Clear my choice
          </button>
        </div>

        {/* Prev / Next or Submit */}
        <div className="flex justify-between max-w-4xl mx-auto">
          <button
            onClick={() => setCurrent((idx) => Math.max(idx - 1, 0))}
            disabled={current === 0}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300 transition"
          >
            Previous page
          </button>

          {isLast ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-amber-400 text-black rounded hover:bg-amber-500 transition"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={() => setCurrent((idx) => Math.min(idx + 1, total - 1))}
              className="px-4 py-2 bg-amber-400 text-black rounded hover:bg-amber-500 transition"
            >
              Next page
            </button>
          )}
        </div>
      </div>

      {/* Sidebar navigation */}
      <aside className="w-48 h-40 bg-white rounded shadow p-4 space-y-4">
        <h3 className="font-semibold mb-4">Quiz navigation</h3>
        <div className="flex gap-2">
          {shuffled.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrent(idx)}
              className={`w-8 h-8 flex items-center justify-center border rounded text-xs
                ${
                  current === idx
                    ? "bg-amber-400 text-white"
                    : answers[item.id]
                    ? "bg-amber-500"
                    : "bg-white"
                }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
