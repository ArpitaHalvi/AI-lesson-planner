/* eslint-disable react/display-name */
import { forwardRef, useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactToPrint from "react-to-print";

const PrintableLessonPlan = forwardRef((props, ref) => {
  const location = useLocation();
  const lessonPlan = location.state || {};
  console.log(lessonPlan);
  //   const {
  //     topic,
  //     gradeLevel,
  //     mainConcept,
  //     subTopics,
  //     materialsNeeded,
  //     learningObjectives,
  //     lessonOutline,
  //   } = lessonPlan;`

  //   const materialsRequired = materialsNeeded.split(",");

  return (
    <section
      className="w-full flex justify-center items-center min-h-[90vh] p-card"
      ref={ref}
    >
      <div className="w-3/4 bg-white p-card rounded flex flex-col justify-center">
        <h2 className="text-3xl font-bold p-5 bg-amber-100">Topic: {""}</h2>
        <hr />
        <h3 className="p-5 text-lg bg-blue-200">Summary</h3>
        <table className="my-5">
          <tr className="">
            <th className="p-5 border border-gray-500">Date</th>
            <td className="p-5 border border-gray-500">
              {new Date().toLocaleDateString()}
            </td>
          </tr>
          <tr>
            <th className="p-5 border border-gray-500">Subject</th>
            <td className="p-5 border border-gray-500">{""}</td>
          </tr>
          <tr>
            <th className="p-5 border border-gray-500">
              Year Group or Grade Level
            </th>
            <td className="p-5 border border-gray-500">{""}</td>
          </tr>
          <tr>
            <th className="p-5 border border-gray-500">Main Topic or Unit</th>
            <td className="p-5 border border-gray-500">{""}</td>
          </tr>
          <tr>
            <th className="p-5 border border-gray-500">
              Subtopics or Key Concepts
            </th>
            <td className="p-5 border border-gray-500">{""}</td>
          </tr>
        </table>
        <h3>Materials Needed</h3>
        <ul>
          {/* {materialsRequired.map((material, index) => {
            return <li key={index}>{material}</li>;
          })} */}
        </ul>
        <h3 className="bg-blue-100 p-5 font-bold">Learning Objectives</h3>
        <p className="p-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          laudantium quidem aperiam eos eaque odit sapiente rem molestiae minima
          quae nobis ratione deleniti, tempore dignissimos aliquid voluptatem
          culpa repellendus officiis nemo illum libero laborum fugit numquam
          explicabo? Ipsum qui tempora rem, mollitia velit dolorum, corrupti
          aperiam harum deserunt, neque nihil.
        </p>
        <h3 className="bg-blue-100 p-5 font-bold">Lesson Outline</h3>
        <p className="p-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit unde assumenda, necessitatibus, in fugit quaerat iure
          molestias animi veniam repellendus soluta consequatur alias nulla
          cupiditate quidem odit odio dolor iusto id! Quo labore quia vel
          suscipit placeat dolore officia, similique, iusto dignissimos dolorem
          odio quisquam? Veritatis non molestias blanditiis quae.
        </p>
      </div>
    </section>
  );
});

export default function LessonPlanPDF() {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Download as PDf</button>}
        content={() => componentRef.current}
      />
      <PrintableLessonPlan ref={componentRef} />
    </div>
  );
}
