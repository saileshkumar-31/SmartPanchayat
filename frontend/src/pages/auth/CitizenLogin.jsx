import { useState } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import citizenBg from "../../assets/citizenlogin/bg.png";
import { api, setAuthSession } from "../../lib/api";

// Citizen login page - handles user authentication for citizens
const CitizenLogin = () => {
  // State for form fields
  const [showPassword, setShowPassword] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Handle login submission
  const handleLogin = async () => {
    try {
      // Check if user entered email or mobile number
      let loginData;
      if (loginId.includes("@")) {
        // User entered email
        loginData = { email: loginId, password };
      } else {
        // User entered mobile number
        loginData = { mobile: loginId, password };
      }

      // Call the login API
      const response = await api.post("/auth/login", loginData);
      
      // Save the session and redirect
      setAuthSession(response.data, response.token);
      navigate("/citizen/dashboard");
      
    } catch (error) {
      // Show error message to user
      alert(error.message || "Login failed. Please check your credentials.");
    }
  };

    return (
    // Main container for the login page
    <section className="min-h-screen bg-[#f5f7f4] px-4 sm:px-6 py-8 sm:py-12 lg:py-14 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">

        {/* Left side - Welcome message and image */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-800 leading-tight mb-4 sm:mb-6">
            Citizen Login
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 lg:mb-10">
            Login to access citizen services
            <br className="hidden sm:block" />
            and track your requests.
          </p>

          <img
            src={citizenBg}
            alt="Citizen Login"
            className="w-full max-w-[320px] sm:max-w-[430px] lg:max-w-[560px] mx-auto lg:mx-0 object-contain"
          />
        </div>

        {/* Right side - Login form card */}
        <div className="order-1 lg:order-2 relative bg-white rounded-3xl shadow-xl px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 max-w-xl mx-auto w-full">

          {/* User icon at the top of the card */}
          <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-50 border border-green-200 flex items-center justify-center shadow-md">
            <User size={30} className="text-green-700 sm:w-[38px] sm:h-[38px]" />
          </div>

          {/* Form content */}
          <div className="pt-6 sm:pt-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900">
              Welcome Back!
            </h2>

            <p className="text-center text-sm sm:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
              Please login to your account
            </p>

                        {/* Email or mobile number input field */}
            <div className="mb-5 sm:mb-6">
              <label
                htmlFor="loginId"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Mobile Number / Email
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="loginId"
                  name="loginId"
                  type="text"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  placeholder="Enter mobile number or email"
                  autoComplete="username"
                  className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 sm:py-4 outline-none focus:border-green-700"
                />
              </div>
            </div>

            {/* Password input field */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full border border-gray-300 rounded-xl pl-12 pr-12 py-3 sm:py-4 outline-none focus:border-green-700"
                />

                {/* Button to toggle password visibility */}
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

                        {/* Remember me checkbox and forgot password link */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm mb-6 sm:mb-7">
              <label
                htmlFor="rememberMe"
                className="flex items-center gap-2 text-gray-600"
              >
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                />
                Remember Me
              </label>

              <button onClick={() => navigate("/forgotpassword")} className="text-green-700 font-medium">
                Forgot Password?
              </button>
            </div>

            {/* Main login button */}
            <button onClick={handleLogin} className="w-full bg-green-800 hover:bg-green-900 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-md transition">
              Login
            </button>

            {/* Link to registration page for new users */}
            <p className="text-center text-sm sm:text-base text-gray-600 mt-6 sm:mt-8">
              Don&apos;t have an account?{" "}
              <span
                onClick={() => navigate("/citizen/register")}
                className="text-green-700 font-semibold cursor-pointer"
              >
                Register Here
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CitizenLogin;
