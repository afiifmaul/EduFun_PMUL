import Link from "next/link";

export default function QuizCard({ title, href }) {
  return (
    <Link href={href}>
      <div className="p-4 bg-yellow-100 border border-gray-200 rounded shadow hover:shadow-md transition cursor-pointer">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="my-4 px-4 py-2 bg-amber-400 text-black rounded hover:bg-amber-500 transition">
          Mulai kuis
        </p>
      </div>
    </Link>
  );
}
