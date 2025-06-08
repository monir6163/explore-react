import { useAuth } from "../../context/AuthProvider";

export default function Logout() {
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    // Optionally, redirect to home or login page after logout
    // window.location.href = "/";
  };
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
