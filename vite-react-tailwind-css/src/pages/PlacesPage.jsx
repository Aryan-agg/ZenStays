// import { Link, useParams } from "react-router-dom";
// import AccountNav from "../AccountNav";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function PlacesPages() {
//   const [places, setPlace]=useState([]);
//   useEffect(() => {
//     axios.get('/places').then(({ data }) => {
//       setPlace(data);
//     });
//   }, []);
//   return (
//     <div>
//     <AccountNav />
  
//         <div className="text-center">
//           <Link
//             className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
//             to={"/account/places/new"}
//           >
//             Add new place{" "}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               class="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 4.5v15m7.5-7.5h-15"
//               />
//             </svg>
//           </Link>
//         </div>
//       <div className="mt-4">
//         {places.length> 0 && places.map(place =>(
//           <Link to={'/account/places/' + place._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
//           <div className="w-32 h-32 bg-gray-300 grow shrink-0 flex">
//             {place.photos.length && (
//               <img className="object-cover " src={'http://localhost:4000/uploads/'+place.photos[0]} alt=" "/>
//            <div> 
//           </div>
              
//             )}
//            </div>
//            <div className="grow-0 shrink"> 
//            <h4 className="text-xl"> {place.title} </h4> 
//            <p className="text-sm mt-2">{place.description}</p>
//            </div>
          
//                    </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

import { Link, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";

export default function PlacesPages() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('user-places').then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <AccountNav />

      <div className="text-center">
        <Link
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
          to={"/account/places/new"}
        >
          Add new place{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Link>
      </div>

      <div className="mt-4">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={"/account/places/" + place._id}
              className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl"
              key={place._id}
            >
              <div className="w-32 h-32 bg-gray-300 grow shrink-0 flex">
                <PlaceImg place={place} />
                <div>
                  
                </div>
              </div>
              <div className="grow-0 shrink">
                <h4 className="text-xl">{place.title}</h4>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}



// import { Link } from "react-router-dom";
// import AccountNav from "../AccountNav";
// import { useEffect } from "react";
// import axios from "axios";

// export default function PlacesPage() {
  
//   useEffect(() => {
//     axios.get('/places').then(({ data }) => {
//       // Handle the response data here
//       console.log(data);
//     });
//   }, []);

//   return (
//     <div>
//       <AccountNav />
  
//       <div className="text-center">
//         List of all added places
//         <br />
//         <Link
//           className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
//           to="/account/places/new"
//         >
//           Add new place{" "}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 4.5v15m7.5-7.5h-15"
//             />
//           </svg>
//         </Link>
//       </div>
//     </div>
//   );
// }

