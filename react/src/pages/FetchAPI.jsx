import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const FetchAPI = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map((item, index) => {
        return (
          <Link to={`/products/${item.id}`}>
            <FaHome />
            <div className="p-2 border-2 w-[20rem] h-[15rem]">
              <h1 className="font-bold text-3xl text-center">{item.title}</h1>
              <p className="text-justify">{item.body.slice(0, 90)}...</p>
            </div>
            <IoMdContact/>
          </Link>
        );
      })}
    </div>
  );
};

export default FetchAPI;
