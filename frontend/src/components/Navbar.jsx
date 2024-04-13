import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <div className="max-w-[1400px] mx-auto px-5 py-2 flex items-center justify-between">
            <Link to='/'>
                <h1>Workout Buddy</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar