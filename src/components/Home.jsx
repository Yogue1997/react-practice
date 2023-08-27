import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const jsonData = "https://jsonplaceholder.typicode.com/posts";

  const [api, setApi] = useState([]);
  const [err, setErr] = useState()

  const fecth = async () => {
    try {
      await axios.get(jsonData).then((res) => {
        setApi(res.data);
      });
    } catch (error) {
      console.log(error);
      setErr(error)
    }
  }

  useEffect(() => {
    fecth()
  }, [])

  return (
    <>
      <div>
        {api.map((data) => (
          <p>{data.title}</p>
        ))}
        <p>{err}</p>
      </div>
    </>
  );
}

export default Home;
