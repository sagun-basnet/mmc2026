import Navbar from "./components/Navbar";

const App = () => {
  const username = "";

  // const add = () => {};

  return (
    <>
      <Navbar name={username} />
      {/* <Navbar name="Ram" age={26} />
      <Navbar name="Ram" age={26} />
      <Navbar name="Ram" age={26} />
      <Navbar name="Ram" age={26} /> */}
      {/* <h1 className="underline text-primary flex justify-around grid grid-cols-6 text-[10rem] h-64 border-2 border-black rounded-md sm ">
        Hello
      </h1> */}

      {username.length > 0 && <h1>Welcome {username}</h1>}
    </>
  );
};

export default App;
