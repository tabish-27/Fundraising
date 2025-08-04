import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const userRes = await axios.get("/api/user");
      const rewardsRes = await axios.get("/api/rewards");

      setUser(userRes.data);
      setRewards(rewardsRes.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Your Dashboard</h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">User Details</h2>
        <p><strong>Name:</strong> {user?.name || "N/A"}</p>
        <p><strong>Email:</strong> {user?.email || "N/A"}</p>
        <p><strong>Total Donated:</strong> ₹{user?.donatedAmount || 0}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Your Rewards</h2>
        {rewards?.length > 0 ? (
          <ul className="space-y-4">
            {rewards.map((reward, index) => (
              <li
                key={index}
                className={`p-4 rounded-xl border ${
                  reward.unlocked ? "bg-green-50 border-green-300" : "bg-gray-100 border-gray-300"
                }`}
              >
                <p className="font-semibold">{reward.title}</p>
                <p className="text-sm text-gray-600">{reward.description}</p>
                <p className="text-sm mt-1">
                  Status:{" "}
                  <span className={reward.unlocked ? "text-green-600" : "text-gray-500"}>
                    {reward.unlocked ? "Unlocked 🎉" : "Locked 🔒"}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No rewards yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
