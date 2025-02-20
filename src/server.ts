import app from "./app";

// Define the port to listen on; use environment variable PORT or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and log a message when it is up and running
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
