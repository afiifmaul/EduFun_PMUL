export default function CourseCard({ title, description }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
