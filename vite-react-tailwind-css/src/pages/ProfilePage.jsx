import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPages from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    setRedirect("/");
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  const { subpage } = useParams();

  const defaultSubpage = subpage || "profile";


  

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
    <AccountNav />
      {defaultSubpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})
          <br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Log out
          </button>
        </div>
      )}
      {defaultSubpage === "places" && <PlacesPages />}
    </div>
  );
}
