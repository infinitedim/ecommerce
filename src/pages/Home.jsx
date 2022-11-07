import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:88")
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((error) => console.error(error));
  }, [setData]);

  return (
    <main className="main">
      <Navbar />
      <h1>{data.statusText}</h1>
    </main>
  );
}

export default Home;
