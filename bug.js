const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for cases where userId is not a number or is not found
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// ... rest of the code