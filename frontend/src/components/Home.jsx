import { useEffect, useState } from "react";

const Home = () => {
  const [message, setMessage] = useState(""); // State to store the fetched message

  useEffect(() => {
    // Fetch data from backend
    fetch("http://localhost:5001") // Make the request to your backend API
      .then((response) => response.json()) // Converts response to JSON format
      .then((data) => {
        setMessage(data.message); // Set the message received from the backend
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });
  }, []); // Empty array means this effect runs once after the first render

  return (
    <div>
      <h1>{message || "Loading..."}</h1> {/* Display the message */}
    </div>
  );
};

export default Home;
