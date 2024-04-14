


const WorkoutDetails = ({ workout }) => {
  return (
    <div className="bg-secondary-foreground rounded-lg w-full text-accent shadow-lg p-4">
      <h4 className="text-ring font-thin mb-2">{workout.title}</h4>
      <p className="text-popover">
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p className="text-popover">
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p className="text-muted-foreground mt-2">{workout.createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
