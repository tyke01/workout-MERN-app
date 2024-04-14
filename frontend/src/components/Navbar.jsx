import { Link } from "react-router-dom";

import { FiMenu } from "react-icons/fi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full ">
      <div className="max-w-[1400px] mx-auto px-5 py-2 flex items-center justify-between bg-secondary-foreground">
        <Link to="/">
          <h1 className="text-primary text-2xl font-bold">Workout Buddy</h1>
        </Link>
        <nav className=" space-x-4 font-bold hidden md:block">
          <Link
            to="/"
            className="text-accent hover:text-primary transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/workouts"
            className="text-accent hover:text-primary transition duration-300 ease-in-out"
          >
            Workouts
          </Link>
          <Link
            to="/progress"
            className="text-accent hover:text-primary transition duration-300 ease-in-out"
          >
            Progress
          </Link>
          <Link
            to="/profile"
            className="text-accent hover:text-primary transition duration-300 ease-in-out"
          >
            Profile
          </Link>
        </nav>
        <nav className="flex flex-col space-y-4 font-bold lg:hidden">
          <Sheet>
            <SheetTrigger  className="text-2xl text-white">
              <FiMenu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="flex flex-col text-primary text-3xl text-start">
                  <Link
                    to="/"
                    className="text-accent-foreground hover:text-primary transition duration-300 ease-in-out"
                  >
                    Home
                  </Link>
                  <Link
                    to="/workouts"
                    className="text-accent-foreground hover:text-primary transition duration-300 ease-in-out"
                  >
                    Workouts
                  </Link>
                  <Link
                    to="/progress"
                    className="text-accent-foreground hover:text-primary transition duration-300 ease-in-out"
                  >
                    Progress
                  </Link>
                  <Link
                    to="/profile"
                    className="text-accent-foreground hover:text-primary transition duration-300 ease-in-out"
                  >
                    Profile
                  </Link>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
