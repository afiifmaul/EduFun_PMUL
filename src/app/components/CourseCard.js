// app/components/CourseCard.js
import Link from "next/link";

// Utility untuk memotong teks berdasarkan jumlah kata
function truncateText(text, maxWords = 20) {
  const words = text.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text;
}

export default function CourseCard({ id, title, description }) {
  return (
    <Link href={`/courses/${id}`}>
      <div className="p-4 bg-yellow-100 border border-gray-200 rounded shadow hover:shadow-md transition cursor-pointer">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{truncateText(description, 20)}</p>
      </div>
    </Link>
  );
}
