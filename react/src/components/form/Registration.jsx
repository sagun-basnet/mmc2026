import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const init = {
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.length === 0) {
      alert("Name field required..");
      return;
    }

    if (formData.phone.length < 9) {
      alert("Phone must be of 10 charater.");
      return;
    }

    if (formData.email.length === 0) {
      alert("Email field required");
      return;
    }

    //api call
    console.log(formData);

    setFormData(init);

    navigate("/login");
  };

  return (
    <div className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-4 shadow-2xl rounded-lg w-[30rem] p-8"
      >
        <h1 className="font-bold text-4xl">Register</h1>
        <input
          value={formData.name}
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          value={formData.address}
          onChange={handleChange}
          name="address"
          type="text"
          placeholder="Enter Your Address"
        />
        <input
          value={formData.phone}
          onChange={handleChange}
          name="phone"
          type="number"
          placeholder="Enter Your Phone"
        />
        <input
          value={formData.email}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          value={formData.password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Enter Your Password"
        />

        <button type="submit" className="bg-blue-500 text-white font-bold">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Registration;
