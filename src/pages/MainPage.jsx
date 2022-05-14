import { Skeleton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../services/CoursesService";

const MainPage = () => {
  const courses = getCourses();

  return (
    <div className="">
      <h2 className="text-2xl">Bienvenido, Nicolas</h2>
      <section className="mt-6">
        <h3 className="text-gray-400 text-sm">Mis cursos</h3>
        <div className="grid grid-flow-col-dense auto-cols-max space-x-2 overflow-x-auto py-2">
          {courses.map((course) => (
            <Link to={`/course/${course.id}`} key={course.id}>
              <div
                style={{ backgroundColor: course.color[600] }}
                className="flex items-end p-2 w-36 h-48 rounded shadow cursor-pointer"
              >
                <p className="text-xs mb-1">{course.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h3 className="text-gray-400 text-sm">Ultimas noticias</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2">
          {[0, 1, 2, 3].map((skeleton, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              height={140}
              sx={{ bgcolor: "grey.800" }}
            ></Skeleton>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
