import { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Events from "./Events";
import eventReducer from "./reducers/eventReducer";
export const eventsListContext = createContext();

// function reducer(state, item) {
//   return [...state, item];
// }
const eventsList = [
  {
    id: 1,
    name: "Event 1",
    date: "10/28/2022",
  },
  {
    id: 2,
    name: "Event 2",
    date: "10/29/2022",
  },
];
function Home() {
  const [events, setEvents] = useReducer(eventReducer, eventsList);
  return (
    <eventsListContext.Provider value={{ events, setEvents }}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/EventsList" element={<Events />} />
      </Routes>
    </eventsListContext.Provider>
  );
}
export default Home;
