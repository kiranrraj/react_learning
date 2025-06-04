import { useState } from "react";
import { useEffect } from "react";

const UseEffectExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log(`Fetching data for userId: ${userId}`);
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((res_data) => {
        setData(res_data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData(null);
        setLoading(false);
      });

    return () => {
      console.log(`Cleaning up fetch for userId ${userId}`);
    };
  }, [userId]);

  useEffect(() => {
    if (data) {
      document.title = `User: ${data.name}`;
      console.log(`Document title set to ${data.name}`);
    } else {
      document.title = `Loading user...`;
    }
  }, [data]);

  useEffect(() => {
    console.log("Starting timer");
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Cleanup: Stopping timer");
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <h2>useEffect Example</h2>
      <p>Seconds on page: {seconds}</p>

      <h3>User Details:</h3>
      {loading ? (
        <p>Loading user data...</p>
      ) : data ? (
        <div>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Website:</strong> {data.website}
          </p>
        </div>
      ) : (
        <p>Failed to load user data.</p>
      )}

      <button onClick={() => setUserId((prev) => (prev < 10 ? prev + 1 : 1))}>
        Next User (Current: {userId})
      </button>
    </div>
  );
};

export default UseEffectExample;
