import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
<<<<<<< HEAD
import { RadioGroup } from '../ui/radio-group';
=======
>>>>>>> Nik
import Navbar from '../components_lite/Navbar';
import axios from 'axios';
import { USER_API_ENDPOINT } from '@/utils/data';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
<<<<<<< HEAD
=======
import { Eye, EyeOff, Loader2, Upload } from 'lucide-react';
>>>>>>> Nik

const Register = () => {
  const [input, setInput] = useState({
    fullname: '',
    email: '',
    password: '',
    role: '',
    phoneNumber: '',
<<<<<<< HEAD
    file: '',
  });

=======
    file: null,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [preview, setPreview] = useState('');
>>>>>>> Nik
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

<<<<<<< HEAD
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('fullname', input.fullname);
    formData.append('email', input.email);
    formData.append('password', input.password);
    formData.append('role', input.role);
    formData.append('phoneNumber', input.phoneNumber);
    if (input.file) {
      formData.append('file', input.file);
    }
=======
  const validateForm = () => {
    const newErrors = {};
    if (!input.fullname.trim()) {
      newErrors.fullname = "Full name is required";
    } else if (input.fullname.length < 3) {
      newErrors.fullname = "Name must be at least 3 characters";
    }

    if (!input.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!input.password) {
      newErrors.password = "Password is required";
    } else if (input.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/(?=.*[A-Z])(?=.*\d)/.test(input.password)) {
      newErrors.password = "Must contain at least one number and uppercase letter";
    }

    if (!input.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(input.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number (10 digits required)";
    }

    if (!input.role) newErrors.role = "Please select a role";
    if (!input.file) newErrors.file = "Profile photo is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrors({ ...errors, file: "Please upload an image file" });
        return;
      }
      setInput({ ...input, file });
      setPreview(URL.createObjectURL(file));
      setErrors({ ...errors, file: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    Object.entries(input).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });
>>>>>>> Nik

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
<<<<<<< HEAD
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
=======
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate('/login');
        toast.success('Registration successful! Please login');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
>>>>>>> Nik
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <div className='flex items-center justify-center min-h-screen p-5 '>
      <div className="lg:w-3/10 md:w-2/5 w-full lg:pr-4 md:pr-2 pr-0">
        <img src="welcome.png" alt="hero_img" className="w-full h-full object-cover object-center" />
      </div>
        <form
          onSubmit={submitHandler}
          className='w-full max-w-md border border-[#7e22ce] rounded-lg p-6 bg-white shadow-lg'
        >
          <h1 className='font-bold text-2xl mb-5 text-[#7e22ce] text-center'>Register</h1>
          <div className='my-2'>
            <Label>Name</Label>
            <Input
              type='text'
              value={input.fullname}
              name='fullname'
              onChange={changeEventHandler}
              placeholder='Enter your name'
            />
          </div>
          <div className='my-2'>
            <Label>Email</Label>
            <Input
              type='email'
              value={input.email}
              name='email'
              onChange={changeEventHandler}
              placeholder='example@gmail.com'
            />
          </div>
          <div className='my-2'>
            <Label>Password</Label>
            <Input
              type='password'
              value={input.password}
              name='password'
              onChange={changeEventHandler}
              placeholder='password'
            />
          </div>
          <div className='my-2'>
            <Label>Phone Number</Label>
            <Input
              type='tel'
              value={input.phoneNumber}
              name='phoneNumber'
              onChange={changeEventHandler}
              placeholder='phone number'
            />
          </div>

          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className='flex items-center space-x-2'>
                <Input
                  type='radio'
                  name='role'
                  value='Student'
                  checked={input.role === 'Student'}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor='r1'>Student</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <Input
                  type='radio'
                  name='role'
                  value='Recruiter'
                  checked={input.role === 'Recruiter'}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor='r2'>Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          <div className='flex items-center gap-2'>
            <Label>Profile Photo</Label>
            <Input
              type='file'
              accept='image/*'
              onChange={changeFileHandler}
              className='cursor-pointer'
            />
          </div>

          {loading ? (
            <div className='flex justify-center items-center my-10'>
              <div className='spinner-border text-blue-600' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            </div>
          ) : (
            <button className='bg-[#7e22ce] hover:bg-[#7e22ce80] block my-3 w-full py-3 text-white rounded-md transition duration-200'>
              Register
            </button>
          )}

          <p className='text-gray-500 text-md my-2 text-center'>
            Already have an account?{' '}
            <Link to='/login' className='text-blue-700'>
              Login
            </Link>
          </p>
        </form>
=======
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8">
          <div className="text-center space-y-1 mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Create Account</h1>
            <p className="text-gray-500 text-sm">Join our professional community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-gray-700">Full Name</Label>
              <Input
                name="fullname"
                value={input.fullname}
                onChange={(e) => {
                  setInput({ ...input, fullname: e.target.value });
                  setErrors({ ...errors, fullname: '' });
                }}
                className={`mt-1 ${errors.fullname ? 'border-red-500' : ''}`}
                placeholder="John Doe"
              />
              {errors.fullname && <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>}
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">Email</Label>
              <Input
                type="email"
                name="email"
                value={input.email}
                onChange={(e) => {
                  setInput({ ...input, email: e.target.value });
                  setErrors({ ...errors, email: '' });
                }}
                className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="name@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={input.password}
                  onChange={(e) => {
                    setInput({ ...input, password: e.target.value });
                    setErrors({ ...errors, password: '' });
                  }}
                  className={`pr-10 ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-500"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">Phone Number</Label>
              <Input
                type="tel"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={(e) => {
                  setInput({ ...input, phoneNumber: e.target.value.replace(/\D/g, '') });
                  setErrors({ ...errors, phoneNumber: '' });
                }}
                className={`mt-1 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                placeholder="1234567890"
                maxLength="10"
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700 block mb-2">I am a</Label>
              <div className="grid grid-cols-2 gap-2">
                {['Student', 'Recruiter'].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => {
                      setInput({ ...input, role });
                      setErrors({ ...errors, role: '' });
                    }}
                    className={`p-2 text-sm rounded-md border transition-colors ${
                      input.role === role
                        ? 'border-[#7e22ce] bg-[#7e22ce] text-white'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
              {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700">Profile Photo</Label>
              <label className="mt-1 flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#7e22ce] transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {preview ? (
                    <img src={preview} alt="Preview" className="h-12 w-12 rounded-full object-cover" />
                  ) : (
                    <>
                      <Upload className="h-5 w-5 text-gray-400 mb-1" />
                      <p className="text-xs text-gray-500">
                        <span className="text-[#7e22ce]">Click to upload</span>
                      </p>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#7e22ce] hover:bg-[#6b21a8] text-white py-2 px-4 rounded-md text-sm font-medium transition-all flex items-center justify-center"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Create Account"
              )}
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-[#7e22ce] hover:text-[#6b21a8]"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
>>>>>>> Nik
      </div>
    </>
  );
};

export default Register;