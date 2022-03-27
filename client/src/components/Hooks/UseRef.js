import React, { useRef, useState } from "react";

const UseRef = () => {
  const [user, setUser] = useState("");

  const myName = useRef(null);

  const SubmitForm = (e) => {
    e.preventDefault();
    const name = myName.current.value;
    setUser(name);
  };
  return (
    <>
      <form onSubmit={SubmitForm}>
        <input type="text" ref={myName} />
        <button>Submit</button>
      </form>
      <h3>{user}</h3>
    </>
  );
};

export default UseRef;
