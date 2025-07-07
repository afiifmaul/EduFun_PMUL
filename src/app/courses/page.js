// app/courses/page.js
import Link from "next/link";
import { courses } from "../data/courses";

// util untuk memotong teks (bisa Anda sesuaikan panjangnya)
function truncateText(text, maxWords = 15) {
  const words = text.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text;
}

export default function CoursesPage() {
  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold mb-6">Daftar Courses</h1>
      <ul className="space-y-4">
        {courses.map((c) => (
          <li key={c.id} className="border-b pb-4">
            <Link
              href={`/courses/${c.id}`}
              className="block hover:text-amber-400 transition"
            >
              <h2 className="text-xl font-semibold">{c.title}</h2>
              <p className="text-gray-700 mt-1">
                {truncateText(c.description, 20)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
