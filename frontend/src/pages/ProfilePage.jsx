import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
    const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Authenticated User Information</p>
    <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;