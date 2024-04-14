import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const [error, setError] = useState(null);

  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      console.log("New workout added", json);
    }
  };

  return (
    <form
      className="flex flex-col items-baseline  gap-3 mt-auto md:fixed right-5 top-32"
      onSubmit={handleSubmit}
    >
      <h3>Add a New Workout</h3>

      <div className="flex flex-col items-center justify-center w-fit ">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Exercise title</label>
          <input
            id="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="focus:outline-none text-accent-foreground p-2 w-full rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="load">Load (kg)</label>
          <input
            id="load"
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            className="focus:outline-none text-accent-foreground p-2 w-full rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="reps">Reps</label>
          <input
            id="reps"
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            className="focus:outline-none text-accent-foreground p-2 w-full rounded-md"
          />
        </div>
      </div>
      <Button>
        Add workout
      </Button>
      {error && (
        <div className="p-10 bg-secondary-foreground text-accent-foreground " >
          {" "}
          {error}
        </div>
      )}
    </form>
  );
};

export default WorkoutForm;
