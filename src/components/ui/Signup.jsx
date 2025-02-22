import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "./button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../features/authSlice";
import Error from "./Error";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const signupUser = (e) => {
    e.preventDefault();
    try {
      dispatch(signup({ email: user.email, password: user.password }));
      navigate("/lesson-planner");
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <section className="w-full flex justify-center items-center h-[90vh]">
      {error && <Error msg={error} />}
      <Card className="w-1/4 h-1/2 flex justify-center items-center p-4 text-lg">
        <CardHeader className="text-center text-3xl">
          <CardTitle>SIGNUP</CardTitle>
        </CardHeader>
        <CardContent className="w-full p-4">
          <form className="w-full flex flex-col gap-3" onSubmit={signupUser}>
            <Input
              placeholder="Email"
              type="text"
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
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button className="login text-lg cursor-pointer" type="submit">
            Sign Up
          </Button>
          <p className="flex text-sm justify-center items-center">
            Already have an account?
            <NavLink className="font-bold" to="/login">
              Login
            </NavLink>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}
