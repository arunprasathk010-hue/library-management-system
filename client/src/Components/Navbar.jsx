import { Link, Links } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='bg-white border border-b border-gray-200 shadow-sm sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          
          <Link className='font-bold text-blue-500 font-semibold'>
            Libris <span>Admin</span>
          </Link>

          <div className='flex space-x-6 items-center'>
            <Link to="/books" className='font-semibold'>
              Books
            </Link>

            <Link
              to="/members"
              className='font-semibold'>
              Members
            </Link>

            <button className='px-3.5 py-1.5 bg-red-800 rounded font-bold text-white'>
              Logout
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;