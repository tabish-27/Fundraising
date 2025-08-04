function RewardCard({ title, icon, desc }) {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center hover:shadow-lg transition">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}

export default RewardCard;
