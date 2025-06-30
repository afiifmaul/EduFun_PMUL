import { courses } from "../../data/courses";
import QuizCard from "../../components/QuizCard";
import Image from "next/image";
export default function CourseDetail({ params }) {
  const course = courses.find((c) => c.id === params.id);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-600">{course.description}</p>
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
      <h2 className="text-2xl font-semibold mt-4">Quiz untuk {course.title}</h2>
      <QuizCard
        title={`Mulai Kuis ${course.title}`}
        href={`/quiz/${course.id}`}
      />
    </div>
  );
}
