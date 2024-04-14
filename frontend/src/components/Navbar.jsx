import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full">
      <div className="max-w-[1400px] mx-auto px-5 py-2 flex items-center justify-between bg-secondary-foreground">
        <Link to="/">
          <h1 className="text-primary text-2xl font-bold">Workout Buddy</h1>
        </Link>
        <nav className="flex space-x-4 font-bold">
          <Link to="/" className="text-accent hover:text-primary transition duration-300 ease-in-out">Home</Link>
          <Link to="/workouts" className="text-accent hover:text-primary transition duration-300 ease-in-out">Workouts</Link>
          <Link to="/progress" className="text-accent hover:text-primary transition duration-300 ease-in-out">Progress</Link>
          <Link to="/profile" className="text-accent hover:text-primary transition duration-300 ease-in-out">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
