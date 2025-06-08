import { useAuth } from "../../context/AuthProvider";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div>
      Dashboard
      <h1 className="text-2xl font-bold">
        Welcome, {user?.data?.email || "Guest"}!
      </h1>
      <p className="mt-4">
        This is your dashboard where you can manage your account.
      </p>
    </div>
  );
}
