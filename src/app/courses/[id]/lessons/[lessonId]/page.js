// app/courses/[id]/lessons/[lessonId]/page.js

import { courses } from "../../../../data/courses";
import Link from "next/link";

export default function LessonPage({ params }) {
  const { id, lessonId } = params;

  // === Dump data untuk debugging ===
  // console.log("🚀 params:", params);
  // console.log(
  //   "🚀 available course IDs:",
  //   courses.map((c) => c.id)
  // );

  const course = courses.find((c) => c.id === id);
  // console.log("🚀 matched course:", course?.id);

  // if (course) {
  //   console.log(
  //     "🚀 available lesson IDs for this course:",
  //     course.lessons?.map((l) => l.id)
  //   );
  // }

  const lesson = course?.lessons?.find((l) => l.id === lessonId);
  // console.log("🚀 matched lesson:", lesson?.id);
  // ==================================

  if (!course) {
    return <p className="p-4 text-red-600">Course tidak ditemukan.</p>;
  }

  if (!lesson) {
    return <p className="p-4 text-red-600">Pelajaran tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Breadcrumb / navigasi balik */}
      <nav className="text-sm text-gray-600">
        <Link href="/courses" className="hover:underline">
          Daftar Courses
        </Link>{" "}
        &gt;{" "}
        <Link href={`/courses/${id}`} className="hover:underline">
          {course.title}
        </Link>{" "}
        &gt; <span>{lesson.title}</span>
      </nav>

      <h1 className="text-3xl font-bold">{lesson.title}</h1>
      <p className="text-gray-700">{lesson.description}</p>

      {/* Konten pelajaran */}
      {lesson.content && (
        <div className="prose max-w-none">
          {/* Jika isi HTML/Markdown, pastikan sudah di-parse */}
          {lesson.content}
        </div>
      )}

      <Link
        href={`/courses/${id}`}
        className="inline-block mt-4 px-4 py-2 bg-amber-400 text-black rounded hover:bg-amber-500"
      >
        Kembali ke {course.title}
      </Link>
    </div>
  );
}
