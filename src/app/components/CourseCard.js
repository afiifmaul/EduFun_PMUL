import Link from "next/link";
export default function CourseCard({ id, title, description }) {
  return (
    <Link href={`/courses/${id}`}>
      <div className="p-4 bg-white rounded shadow hover:shadow-md transition cursor-pointer">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
