// controllers/userController.js

export const getUserData = (req, res) => {
  try {
    const user = {
      name: "John Doe",
      email: "john@example.com",
      donatedAmount: 15000,
      referralCode: "tabish2025",
    };
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user details" });
  }
};

export const getRewards = (req, res) => {
  try {
    const rewards = [
      {
        title: "Bronze Badge",
        description: "Awarded after ₹5,000 donations",
        unlocked: true,
      },
      {
        title: "Silver Badge",
        description: "Awarded after ₹10,000 donations",
        unlocked: true,
      },
      {
        title: "Gold Badge",
        description: "Awarded after ₹20,000 donations",
        unlocked: false,
      },
    ];
    res.status(200).json(rewards);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch rewards" });
  }
};
