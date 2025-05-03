import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem("user");
const user = userStr && userStr !== "undefined" ? JSON.parse(userStr) : null;

  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-[#FF6B00]">
            SecureVote
          </Link>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {!user.isAdmin && (
                  <>
                    <Link to="/candidates" style={{ color: '#0A1128' }} className="hover:text-[#FF6B00] font-medium">
                      Candidates
                    </Link>
                    <Link to="/results" style={{ color: '#0A1128' }} className="hover:text-[#FF6B00] font-medium">
                      Results
                    </Link>
                    <Link to="/profile" style={{ color: '#0A1128' }} className="hover:text-[#FF6B00] font-medium">
                      Profile
                    </Link>
                  </>
                )}
                {user.isAdmin && (
                  <Link to="/admin" style={{ color: '#0A1128' }} className="hover:text-[#FF6B00] font-medium">
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" style={{ color: '#0A1128' }} className="hover:text-[#FF6B00] font-medium">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-[#FF6B00] text-white px-4 py-2 rounded hover:bg-orange-600 transition font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
