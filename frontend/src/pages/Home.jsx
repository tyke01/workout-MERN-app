import { useEffect, useState } from "react";

import WorkoutDetails from "@/components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="bg-card-foreground h-full w-full text-accent px-8 pt-16">
      <div className="col-span-3 text-4xl font-bold mb-8">
        Welcome to Your Workout App
      </div>
      <div className="workouts grid grid-cols-3 gap-10">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
