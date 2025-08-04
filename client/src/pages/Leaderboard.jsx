function Leaderboard() {
  const data = [
    { name: 'Tabish Javed', donations: 1500 },
    { name: 'Anuj Mehta', donations: 1200 },
    { name: 'Riya Shah', donations: 900 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">🏆 Leaderboard</h1>
        <table className="w-full table-auto text-left border-collapse">
          <thead>
            <tr className="text-gray-600 text-sm bg-gray-100">
              <th className="py-2 px-3">Rank</th>
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Donations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 transition">
                <td className="py-2 px-3 font-medium">{index + 1}</td>
                <td className="py-2 px-3">{user.name}</td>
                <td className="py-2 px-3 text-green-600 font-semibold">₹{user.donations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
