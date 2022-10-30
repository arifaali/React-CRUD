import { useContext, useReducer } from "react";
import "../assets/css/dashboard.css";
import { eventsListContext } from "./Home";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const { events } = useContext(eventsListContext);

  return (
    <div className="page-content page-container">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-lg-12 col-xl-8">
            <div className="d-flex p-3 my-3 text-white-50 bg-purple rounded box-shadow">
              <div className="lh-100">
                <h6 className="mb-0 text-white lh-100">Dashboard</h6>
              </div>
            </div>
            <div className="card">
              <div className="card-block">
                <div className="row">
                  <div className="col-md-6 m-b-20">
                    <div className="card-sub">
                      <div className="card-block">
                        <h4 className="card-title">Events</h4>
                        <Link to={"/EventsList"}>
                          <p className="card-text">
                            Total Events : {events.length}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 m-b-20">
                    <div className="card-sub">
                      <div className="card-block">
                        <h4 className="card-title">Add Event</h4>
                        <Link to={"/EventsList"}>
                          <p className="card-text">Add new Event</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
