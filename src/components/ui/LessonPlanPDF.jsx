/* eslint-disable react/display-name */

import { useLocation } from "react-router-dom";
import { Button } from "./button";
import jsPDF from "jspdf";
import { useState } from "react";
import Error from "./Error";

export default function LessonPlanPDF() {
  const location = useLocation();
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const lessonPlan = location.state?.lessonPlan || "No data available";
  console.log("Location State: ", location.state?.lessonPlan);
  const formattedLessonPlan = lessonPlan
    .replace(/#/g, " ")
    // .replace(/\*/g, " ")
    .split("\n")
    .map((line, index) =>
      line.startsWith("*") ? (
        <li key={index}>{line.replace(/\*/g, "").trim()}</li>
      ) : (
        <p key={index} className="mb-5">
          {line.replace(/\*/g, "")}
        </p>
      )
    );
  const generatePdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    const lines = doc.splitTextToSize(lessonPlan, 180);
    doc.text(lines, 10, 20);
    try {
      doc.save("LessonPlan.pdf");
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div className="w-full min-h-[90vh] p-10 flex justify-center items-center flex-col gap-5">
      <Error
        msg={error}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div className="bg-white text-base w-[100%] sm:w-3/4 md:w-3/4 lg:w-[70%] xl:w-[60%] p-10 rounded xl:text-lg">
        <h2 className="text-center text-2xl font-bold  mb-5">LESSON PLAN</h2>
        <hr className="mb-5" />
        <div className="">{formattedLessonPlan}</div>
      </div>
      <Button
        className="login bg-gray-900 text-lg border border-gray-700 hover:bg-gray-800"
        onClick={generatePdf}
      >
        Download as PDF
      </Button>
    </div>
  );
}
