import React, { useState } from "react";
import { getAllRoutines, createRoutine } from "../api";


const CreateRoutines = () => {
    const [routineName, setRoutineName] = useState("");
    const [routineGoal, setRoutineGoal] = useState("");
    const [checked, setChecked] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        await createRoutine(routineName, routineGoal);
        const result = await getAllRoutines();
        getAllRoutines(result);
        setRoutineName("");
        setRoutineGoal("");
        setChecked(event.target.checked);
    }
    function handleChange(event) {
        event.preventDefault();
        setChecked(event.target.checked);
    }

    return (
        <div>
            <div>
                <h1>Add New Routine</h1>
            </div>
            <form className="FormRoutines" onSubmit={handleSubmit}>
                <div>
                    <input
                        id="AddName"
                        placeholder="Name"
                        value={routineName}
                        onChange={(event) => {
                            setRoutineName(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <input
                        id="AddGoal"
                        placeholder="Goal"
                        value={routineGoal}
                        onChange={(event) => {
                            setRoutineGoal(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="isPublic">
                        <input
                            id="isPublic"
                            type="checkbox"
                            name="isPublic"
                            checked={checked}
                            onChange={handleChange}
                        />
                      
                    </label>
                </div>
                <button id="AddButton" type="Submit">
                    CREATE ROUTINE
                </button>
            </form>
        </div>
    );
};

export default CreateRoutines;