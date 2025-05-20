import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function CoursesPage() {
  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold mb-6">Daftar Courses</h1>
      {/* Tampilkan daftar course secara horizontal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((c) => (
          <CourseCard
            key={c.id}
            id={c.id}
            title={c.title}
            description={c.description}
          />
        ))}
      </div>
    </div>
  );
}
