// app/courses/[id]/page.js
import Link from "next/link";
import Image from "next/image";
import { courses } from "../../data/courses";
import QuizCard from "../../components/QuizCard";

// util untuk memotong teks
function truncateText(text, maxWords = 20) {
  const words = text.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text;
}

export default function CourseDetail({ params }) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    return <p className="p-4">Course tidak ditemukan.</p>;
  }

  return (
    <div className="space-y-8 max-w-3xl mx-auto p-4">
      {/* Judul */}
      <h1 className="text-3xl font-bold">{course.title}</h1>

      {/* Gambar (jika ada) */}
      {course.image && (
        <div className="flex justify-center">
          <Image
            src={course.image}
            alt={`${course.title} Image`}
            width={course.imageWidth}
            height={course.imageHeight}
            className="rounded shadow"
          />
        </div>
      )}

      {/* Deskripsi */}
      <p className="text-gray-700">{course.description}</p>

      {/* DAFTAR PELAJARAN */}
      {course.lessons && (
        <>
          <h2 className="text-2xl font-semibold border-b pb-2">
            Daftar Pelajaran
          </h2>
          <ul className="space-y-4">
            {course.lessons.map((lesson, idx) => (
              <li key={idx} className="border-b pb-4">
                <Link
                  href={`/courses/${course.id}/lessons/${lesson.id}`}
                  className="block hover:text-amber-400 transition"
                >
                  <h3 className="text-xl font-semibold">{lesson.title}</h3>
                  <p className="text-gray-600 mt-1">
                    {truncateText(lesson.description, 25)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Quiz */}
      <div className="pt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Quiz untuk {course.title}
        </h2>
        <QuizCard
          title={`Mulai Kuis ${course.title}`}
          href={`/quiz/${course.id}`}
        />
      </div>
    </div>
  );
}
