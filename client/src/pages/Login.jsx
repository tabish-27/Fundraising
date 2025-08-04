import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">🌐 Intern Login</h1>
        <p className="text-center text-sm text-gray-500 mb-6">Access your fundraising dashboard</p>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Login;
