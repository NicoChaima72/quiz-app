import React from "react";
import { Link, useParams } from "react-router-dom";
import { getCourseById } from "../services/CoursesService";
import parse from "html-react-parser";

const CoursePage = () => {
  const course = getCourseById(1);

  return (
    <div className="pb-7">
      <h1 className="text-3xl pb-2">{course.name}</h1>
      <hr className="py-2" />
      <div className="space-y-4">{parse(course.resume)}</div>
      <div className="fixed bottom-0 bg-[#0F172A] inset-x-0 shadow-xl border-t border-gray-800 py-3 px-4 flex justify-end space-x-4">
        <button className="border py-2 px-5 rounded hover:bg-[#262e3f] transition ease-out duration-100">
          Leer seccion
        </button>
        <Link to={`/test/${course.id}`}>
          <button className="border py-2 px-5 rounded bg-blue-700 hover:bg-blue-600 transition ease-out duration-100">
            Iniciar test
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoursePage;
