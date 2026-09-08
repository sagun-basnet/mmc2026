import { Link } from "react-router-dom";
import Button from "../Button";

const Navbar = () => {
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
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/service">
          <li>Service</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>

      <div className="flex gap-2">
        <Link to="/login">
          <Button text={"Login"} color={"blue"} />
        </Link>
        <Link to="/register">
          <Button text={"Register"} color={"red"} />
        </Link>
        {/* <Button text={"Register"} color={"yellow"} /> */}
      </div>
    </nav>
  );
};

export default Navbar;
