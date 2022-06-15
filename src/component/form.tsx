import React, { useState } from "react";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const handelSubmit = (event: any) => {
    console.log("event:", event.target[0].value);
    event.preventDefault();
    console.log("name:", name);
    console.log("email:", email);
  };
  return (
    <div className="w-screen h-screen  bg-pink-200">
      <form
        className="flex flex-col items-center pt-52"
        onSubmit={handelSubmit}
      >
        <input
          type="text"
          value={name}
          placeholder="enter your name"
          className="w-32  border rounded-md "
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          value={email}
          className="w-32 mt-4 rounded-md"
          placeholder="enetr you remail"
          onChange={(e) => setemail(e.target.value)}
        />
        <button
          className="bg-green-300 w-20 h-10 mt-4 rounded-lg"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
