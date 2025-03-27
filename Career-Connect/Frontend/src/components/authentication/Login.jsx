<<<<<<< HEAD
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
=======
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
>>>>>>> Nik
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components_lite/Navbar";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data.js";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { setLoading, setUser  } from "@/redux/authSlice";
=======
import { setLoading, setUser } from "@/redux/authSlice";
import { Eye, EyeOff, Loader2 } from "lucide-react";
>>>>>>> Nik

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
<<<<<<< HEAD

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
=======
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const validateForm = () => {
    const newErrors = {};
    if (!input.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!input.password) {
      newErrors.password = "Password is required";
    }
    if (!input.role) {
      newErrors.role = "Please select a role";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
>>>>>>> Nik

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
<<<<<<< HEAD
        headers: {
          "Content-Type": "application/json",
        },
=======
        headers: { "Content-Type": "application/json" },
>>>>>>> Nik
        withCredentials: true,
      });

      if (res.data.success) {
<<<<<<< HEAD
        dispatch(setUser (res.data.user));
        navigate("/Home"); // Redirect to Home after login
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error); // Optional: Change this for more user-friendly error handling
      toast.error(error.response ? error.response.data.message : "Something went wrong!");
=======
        dispatch(setUser(res.data.user));
        navigate("/Home");
        toast.success("Login successful!");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
>>>>>>> Nik
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <div className=" flex flex-wrap justify-center items-center min-h-screen p-5  flex-col md:flex-row">
      <div className="lg:w-3/10 md:w-2/5 w-full lg:pr-4 md:pr-2 pr-0">
        <img src="login.png" alt="hero_img" className="w-full h-full object-cover object-center" />
      </div>
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md border border-[#7e22ce] rounded-lg p-6 bg-white shadow-lg"
        >
          <h1 className="font-bold text-2xl mb-5 text-[#7e22ce] text-center">
            Login
          </h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="password"
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {loading ? (
            <div className="flex justify-center items-center my-10">
              <div className="spinner-border text-blue-600" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button className="bg-[#7e22ce] hover:bg-[#7e22ce80] block my-3 w-full py-3 text-white rounded-md transition duration-200">
              Login
            </button>
          )}

          <p className="text-gray-500 text-md my-2 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-700">
              Register
            </Link>
          </p>
        </form>
=======
      <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 transition-all duration-300 hover:shadow-2xl">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
              <p className="text-gray-500">Sign in to continue your journey</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={(e) => {
                      setInput({ ...input, email: e.target.value });
                      setErrors({ ...errors, email: "" });
                    }}
                    className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={input.password}
                      onChange={(e) => {
                        setInput({ ...input, password: e.target.value });
                        setErrors({ ...errors, password: "" });
                      }}
                      className={`pr-10 ${errors.password ? "border-red-500" : ""}`}
                      placeholder="password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-500"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 block mb-3">
                    I am a
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Student", "Recruiter"].map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => {
                          setInput({ ...input, role });
                          setErrors({ ...errors, role: "" });
                        }}
                        className={`p-3 rounded-lg border transition-colors ${
                          input.role === role
                            ? "border-[#7e22ce] bg-[#7e22ce] text-white"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                  {errors.role && (
                    <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                  )}
                </div>
              </div>

              <span className="flex justify-center">
                  <Link
                  to="/forgetpassword"
                  className=" text-[#7e22ce] hover:text-[#6b21a8] hover:underline"
                >
                  Forgot Password?
                </Link>
                  </span>
          
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#7e22ce] hover:bg-[#6b21a8] text-white py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Sign In"
                )}
              </button>

              <p className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-[#7e22ce] hover:text-[#6b21a8]"
                >
                  Create account
                </Link>
              </p>
            </form>
          </div>
        </div>
>>>>>>> Nik
      </div>
    </>
  );
};

export default Login;