import { Outlet } from "react-router";
import Navbar from "../../shared/Navbar/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
