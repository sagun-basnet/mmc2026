import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const getData = () => {};

  const add = () => {
    setCount((prev) => prev + 1);
    if (count === -1) {
      setShow(false);
    } else {
      setShow(true);
    }
    console.log(count);
  };
  const sub = () => {
    setCount((prev) => prev - 1);
    if (count === -1) {
      setShow(false);
    } else {
      setShow(true);
    }
    console.log(count);
  };

  useEffect(() => {
    getData();
    console.log("From useEffect");
  }, []);

  // const changeText = () => {

  // };

  return (
    <>
      <div className="flex justify-center items-center gap-4">
        {count !== 0 && (
          <button onClick={sub} className="bg-red-500">
            -
          </button>
        )}
        <span>{count}</span>
        <button onClick={add} className="bg-blue-500">
          +
        </button>
      </div>

      <button onClick={() => setShow(!show)} className="bg-red-500">
        {show ? "OFF" : "ON"}
      </button>
      {/* <Navbar name={username} /> */}
      {/* <Navbar name="Ram" age={26} />
      <Navbar name="Ram" age={26} />
      <Navbar name="Ram" age={26} />
      <Navbar name="Ram" age={26} /> */}
      {/* <h1 className="underline text-primary flex justify-around grid grid-cols-6 text-[10rem] h-64 border-2 border-black rounded-md sm ">
        Hello
      </h1> */}

      {/* {username.length > 0 && <h1>Welcome {username}</h1>} */}
    </>
  );
};

export default App;
