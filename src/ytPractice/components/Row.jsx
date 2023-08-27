import React, { useEffect, useState } from "react";
import instance from "../axios";



function Row({ title, fetchUrl }) {

  const [data, setData] = useState([])



  useEffect(() => {
// if [], run once and don't run again
// if[data], it's going to run every time the data variable changes

  async function fetchData() {
    const request = await instance.get(fetchUrl);
    console.log('-=======-=======');
    console.log(request);
    console.log("-=======-=======");
  }

    fetchData()
  }, [])

  return (
    <>
      <div>
        <p>{title}</p>
      </div>
    </>
  );
}
