import OfficerProfile from "./OfficerProfile";
import officers from "../officers.json";

// const firstOfficer = {
//     "id": 1,
//     "name": "Jacob Mercer",
//     "rank": "Commander",
//     "age": 42,
//     "yearsOfService": 10,
//     "specialization": "Fighter Pilot",
//     "awards": ["Starfleet Medal of Honor", "Distinguished Service Cross"],
//     "skills": ["Combat Maneuvers", "Navigation", "Strategic Planning"],
//     "status": "Active",
//     "missionHistory": [
//       "Operation Red Comet - Battle of Orion Nebula",
//       "Operation Blackout - Stealth Reconnaissance",
//       "Operation Phoenix - Search and Rescue"
//     ]
//   }

// const secondOfficer =  {
//     "id": 2,
//     "name": "Adrian Cross",
//     "rank": "Lieutenant",
//     "age": 35,
//     "yearsOfService": 7,
//     "specialization": "Reconnaissance",
//     "awards": ["Silver Star", "Meritorious Service Medal"],
//     "skills": ["Stealth Operations", "Surveillance", "Data Analysis"],
//     "status": "False",
//     "missionHistory": [
//       "Operation Deep Space - Exploration Mission",
//       "Operation Shadowfall - Covert Surveillance",
//       "Operation Stardust - Intelligence Gathering"
//     ]
//   }

export default function App() {
  return (
    <>
      <h1>Officers</h1>
      <ul>
        {officers.map((officer) => (
          <li key={officer.id}>
            <OfficerProfile officer={officer}/>
          </li>
        ))}
      </ul>
    </>
  );
}
