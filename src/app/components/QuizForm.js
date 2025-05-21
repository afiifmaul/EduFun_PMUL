"use client";

import { useState } from "react";

export default function QuizForm({ questions }) {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (qId, value) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Jawaban dikumpulkan:", answers);
    let correctCount = 0;
    let totalMCQ = 0;
    // Tambahkan pengiriman jawaban atau penilaian di sini
    questions.forEach((q) => {
      if (q.type === "mcq") {
        totalMCQ++;
        if (answers[q.id] === q.answer) {
          correctCount++;
        }
      }
    });

    setScore({ correct: correctCount, total: totalMCQ });
  };

  if (score) {
    // Tampilkan hasil setelah submit
    return (
      <div className="p-6 bg-white rounded shadow text-center">
        <h2 className="text-2xl font-bold mb-4">Hasil Quiz</h2>
        <p className="text-lg">
          Kamu menjawab benar{" "}
          <span className="font-semibold">{score.correct}</span> dari{" "}
          <span className="font-semibold">{score.total}</span> soal pilihan
          ganda.
        </p>
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => {
            setScore(null);
            setAnswers({});
          }}
        >
          Ulangi Quiz
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {questions.map((q) => (
        <div key={q.id} className="p-4 bg-white rounded shadow w-5xl mx-auto">
          <p className="font-medium mb-2">{q.question}</p>

          {q.type === "mcq" ? (
            q.options.map((opt, i) => (
              <label key={i} className="block">
                <input
                  type="radio"
                  name={`q${q.id}`}
                  value={opt}
                  checked={answers[q.id] === opt}
                  onChange={() => handleChange(q.id, opt)}
                  className="mr-2"
                  required
                />
                {opt}
              </label>
            ))
          ) : (
            <textarea
              rows={4}
              value={answers[q.id] || ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Masukkan jawaban esai..."
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Submit Jawaban
      </button>
    </form>
  );
}