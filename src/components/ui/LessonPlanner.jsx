import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "./textarea";
import { Label } from "./label";
import { Button } from "./button";
import { useState } from "react";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

const initialData = {
  topic: "",
  gradeLevel: "",
  mainConcept: "",
  subTopics: "",
  materialsNeeded: "",
  learningObjectives: "",
  lessonOutline: "",
};

export default function LessonPlanner() {
  const [loading, setLoading] = useState(false);
  const [lessonPlan, setLessonPlan] = useState("");
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [lesson, setLesson] = useState(initialData);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLesson((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const generateLessonPlan = async (e) => {
    e.preventDefault();
    try {
      const lessonData = {
        contents: [
          {
            parts: [
              {
                text: `Generate a detailed lesson plan for the topic '${lesson.topic}' for '${lesson.gradeLevel}'. The lesson plan should include:  Main Concept: ${lesson.mainConcept} - Sub-Topics: [${lesson.subTopics}] - Materials Required: [${lesson.materialsNeeded}] - Learning Objectives: [${lesson.learningObjectives}] - Lesson Outline: ${lesson.lessonOutline}. Also Generate: - Detailed lesson content - Suggested classroom activities  - Assessment questions
                `,
              },
            ],
          },
        ],
      };
      setLoading(true);
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${
          import.meta.env.VITE_GOOGLE_GEMINI_API_KEY
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(lessonData),
        }
      );
      if (response.ok) {
        const res_data = await response.json();
        console.log("Response: ", res_data);
        // candidates[0].content.parts[0].text
        setLessonPlan(res_data.candidates[0].content.parts[0].text);
        navigate("/lesson-plans", { state: { lessonPlan } });
        setLoading(false);
      } else {
        setError("Error while generating response!");
        setModalOpen(true);
        setLoading(false);
      }
    } catch (e) {
      console.error(e, "Error in generating lesson plan");
      setError(e.message);
      setModalOpen(true);
      setLoading(false);
    }
  };
  return (
    <section className="w-full flex justify-center items-center lesson-planner">
      {error && (
        <Error
          msg={error}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
      <Card className="w-[45%] flex justify-center items-center p-4 text-lg card">
        <CardHeader className="text-center text-3xl">
          <CardTitle>LESSON PLAN</CardTitle>
        </CardHeader>
        <CardContent className="w-full p-4">
          <form className="w-full flex flex-col gap-3 text-lg">
            <Label>Topic</Label>
            <Input
              placeholder="Enter topic"
              type="text"
              className="w-full"
              name="topic"
              value={lesson.topic}
              onChange={handleChange}
              required
            />
            <Label>Grade Level</Label>
            <Input
              placeholder="Grade Level"
              type="text"
              className="w-full"
              name="gradeLevel"
              value={lesson.gradeLevel}
              onChange={handleChange}
              required
            />
            <Label>Main Concept</Label>
            <Input
              placeholder="Main Concept"
              type="text"
              className="w-full"
              name="mainConcept"
              value={lesson.mainConcept}
              onChange={handleChange}
              required
            />
            <Label>Sub Topics</Label>
            <Textarea
              placeholder="Provide comma separated subtopics (Ex. SubTopic1, SubTopic2, ....)"
              className="w-full h-[20vh]"
              name="subTopics"
              value={lesson.subTopics}
              onChange={handleChange}
              required
            ></Textarea>
            <Label>Materials Needed (Comma Separated)</Label>
            <Textarea
              type="text"
              className="w-full h-[20vh]"
              name="materialsNeeded"
              value={lesson.materialsNeeded}
              onChange={handleChange}
              required
            ></Textarea>
            <Label>Learning Objectives (Comma Separated)</Label>
            <Textarea
              className="w-full h-[20vh]"
              name="learningObjectives"
              value={lesson.learningObjectives}
              onChange={handleChange}
              required
            ></Textarea>
            <Label>Lesson Outlines</Label>
            <Textarea
              placeholder="Provide a structured breakdown of the lesson, including introduction, explanation, activities, and assessment"
              className="w-full h-[20vh]"
              name="lessonOutline"
              value={lesson.lessonOutline}
              onChange={handleChange}
              required
            ></Textarea>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            className="text-base"
            type="submit"
            onClick={generateLessonPlan}
          >
            {loading ? "..." : "Generate Lesson Plan"}
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
