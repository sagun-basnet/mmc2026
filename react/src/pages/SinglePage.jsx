import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const [value, setValue] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1 className="text-5xl text-center font-bold">LOADING....</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold ">
        <span className="text-red-500">TITLE:</span> {value.title}
      </h1>
      <p>{value.body}</p>
    </div>
  );
};

export default SinglePage;
