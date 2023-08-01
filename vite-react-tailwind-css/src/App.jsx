import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Route,Routes} from "react-router-dom";
import Indexpage from "./pages/indexPage";
import Loginpage from "./pages/Loginpage";
import Layout from "./Layout";
import Registerpage from "./pages/Registerpage";
import ProfilePage from "./pages/ProfilePage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import PlacesFormPage from "./pages/PlacesFormPage";
import PlacePage from "./pages/Placepage";
import PlacesPages from "./pages/PlacesPage";
import BookingsPage from "./pages/BookingsPage";
import BookingPage from "./pages/BookingPage";


axios.defaults.baseURL="http://localhost:4000";
axios.defaults.withCredentials= true;
function App() {
  //const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Indexpage />}/>
        <Route path="/login" element={<Loginpage />}/>
        <Route path="/register" element={<Registerpage />}/>
        <Route path='/account' element={<ProfilePage />}/>
        <Route path='/account/places' element={<PlacesPages />}/>
        <Route path='/account/places/new' element={<PlacesFormPage />}/>
        <Route path='/account/places/:id' element={<PlacesFormPage />}/>
        <Route path='/place/:id' element={<PlacePage />}/>
        <Route path='/account/bookings' element={<BookingsPage />}/>
        <Route path='/account/bookings/:id' element={<BookingPage />}/>





      </Route>
      
    </Routes>
    </UserContextProvider>
      );
}

export default App;
