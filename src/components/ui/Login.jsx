import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "./button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/features/authSlice";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

export default function Login() {
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    if (user.username === "" || user.password === "") {
      setError("Username or Password is required.");
      return;
    }
    try {
      dispatch(login({ email: user.email, password: user.password }));
      navigate("/lesson-planner");
    } catch (e) {
      setError(e.message);
      setModalOpen(true);
      console.error(e);
    }
  };
  return (
    <section className="w-full flex justify-center items-center h-[90vh]">
      {error && (
        <Error
          msg={error}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
      <Card className="w-[70%] sm:w-1/2 md:w-[40%] lg:w-1/4 h-1/2 flex justify-center items-center p-4 text-lg">
        <CardHeader className="text-center text-3xl">
          <CardTitle>LOGIN</CardTitle>
        </CardHeader>
        <CardContent className="w-full p-4">
          <form className="w-full flex flex-col gap-3" onSubmit={loginUser}>
            <Input
              placeholder="Email"
              type="email"
              className="w-full"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <Input
              placeholder="Password"
              type="password"
              className="w-full"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <Button className="login text-lg cursor-pointer" type="submit">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
