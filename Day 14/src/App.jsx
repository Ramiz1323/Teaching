import React, { useState } from "react";
import FormField from "./components/FormField.jsx";
import Card from "./components/Card.jsx";

const App = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [role, setRole] = useState("");
  
  const localData = JSON.parse(localStorage.getItem("users")) || [];
  console.log(localData);

  const [users, setUsers] = useState(localData);

  const submitHandler = (e) => {
    e.preventDefault();
    const oldUser = [...users, { name, imageUrl, desc, role }];
    setUsers(oldUser);
    localStorage.setItem("users", JSON.stringify(oldUser));
    setName("");
    setImageUrl("");
    setDesc("");
    setRole("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "imageUrl") {
      setImageUrl(value);
    } else if (name === "desc") {
      setDesc(value);
    } else if (name === "role") {
      setRole(value);
    }
  };

  const removeUser = (idx) => {
    const copyUsers = [...users];
    copyUsers.splice(idx, 1);
    setUsers(copyUsers);
    localStorage.setItem("users", JSON.stringify(copyUsers));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 flex-col items-center mt-10 border-2 border-gray-300 p-5 py-10 rounded-lg w-[30%] mx-auto bg-gray-800/50 backdrop-blur-md"
      >
        <FormField
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter Name"
        />

        <FormField
          name="imageUrl"
          value={imageUrl}
          onChange={handleChange}
          placeholder="Enter Image URL"
        />

        <FormField
          name="desc"
          value={desc}
          onChange={handleChange}
          placeholder="Enter Description"
        />

        <FormField
          name="role"
          value={role}
          onChange={handleChange}
          placeholder="Enter Role"
        />
        <button
          type="submit"
          className="w-[30%] py-2 rounded-lg bg-green-600 hover:bg-green-900 transition duration-300 active:scale-90 cursor-pointer"
        >
          Create User
        </button>
      </form>
      <div className="flex mt-10 gap-3">
        {users.map(function ({ name, imageUrl, desc, role }, idx) {
          return (
            <Card
              key={idx}
              name={name}
              imageUrl={imageUrl}
              desc={desc}
              role={role}
              onRemove={() => removeUser(idx)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
