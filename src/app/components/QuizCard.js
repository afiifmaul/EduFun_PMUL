import Link from "next/link";

export default function QuizCard({ title, href }) {
  return (
    <Link href={href}>
      <div className="p-4 bg-white rounded shadow hover:shadow-md transition cursor-pointer">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-blue-600 mt-1">Mulai kuis →</p>
      </div>
    </Link>
  );
}
