import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center mt-60">
      <div>
        <h2 className="text-4xl"> 404 Not found this page.</h2>
        <Link to={"/"} className="underline text-center block text-xl">
          Go to home.
        </Link>
      </div>
    </div>
  );
}
