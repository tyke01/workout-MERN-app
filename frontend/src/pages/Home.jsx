import { useEffect, useState } from "react";

import WorkoutDetails from "@/components/WorkoutDetails";
import WorkoutForm from "@/components/WorkoutForm";

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
    <div className="bg-card-foreground h-full w-full text-accent px-8 pt-16 flex flex-col md:flex-row gap-20 items-baseline">
      <div className="w-full md:w-3/4">
        <div className="col-span-3 text-4xl font-bold mb-8">
          Hey there, welcome to your Workout App!
        </div>
        <div className="workouts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
      </div>

      <WorkoutForm />
    </div>
  );
};

export default Home;
