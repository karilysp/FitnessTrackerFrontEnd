import { useState, useEffect } from "react";
import { createActivity } from "../api";

const CreateActivities = ({ token, activities, setActivities }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [activityMessage, setActivityMessage] = useState({});

  const authenticated = localStorage.getItem("token") ? true : false;

  const onCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = await createActivity(token, name, description);
    if (data.error) {
      setActivityMessage(data);
    }
    setActivities([data, ...activities]);
    setName("");
    setDescription("");
  };

  useEffect(() => {}, [token]);

  return (
    <div key={activities.id}>
      {authenticated === true ? (
        <>
          <h3>Create an Activity</h3>
          <form onSubmit={onCreate}>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="name"
            />
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="description"
            />
            <button type="submit">Create Activity</button>
          </form>
          {activityMessage.error ? (
            <>
              <h3>{activityMessage.message}</h3>
            </>
          ) : null}
        </>
      ) : (
        <h3>Login or Sign Up to Create a Post</h3>
      )}
    </div>
  );
};

export default CreateActivities;