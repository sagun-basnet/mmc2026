import Button from "./Button";

const Navbar = ({ name }) => {
  // console.log(a);

  return (
    // <nav className="border-2 border-amber-500">
    //   {/* <h1>This is navbar</h1> */}
    //   <span>Name: {name}</span> <br />
    //   <span>Age: {age}</span>
    // </nav>
    <nav className="flex justify-between px-6 h-20 items-center bg-amber-500">
      <h1 className="text-3xl font-bold">LOGO</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>

      {name.length === 0 ? (
        <div className="flex gap-2">
          <Button text={"Login"} color={"blue"} />
          <Button text={"Register"} color={"red"} />
          <Button text={"Register"} color={"yellow"} />
        </div>
      ) : (
        <span>{name}</span>
      )}
    </nav>
  );
};

export default Navbar;
