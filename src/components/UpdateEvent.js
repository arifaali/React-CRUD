import { useReducer, useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/dashboard.css";
import { eventsListContext } from "./Home";

export default function UpdateEvents(props) {
  const { setEvents } = useContext(eventsListContext);
  const { events } = useContext(eventsListContext);
  const lastId = events[events.length - 1].id;
  const [eventDate, setEventtDate] = useState(new Date());

  const updateEvent = (e) => {
    e.preventDefault();
    const eventName = document.querySelector('input[name="eventName"]').value;
    const eDate = new Date(eventDate).toLocaleDateString("fr-FR");

    const formVal = {
      id: props.selectedEvent.id,
      name: eventName,
      date: eDate,
    };

    setEvents({ type: "updateEvent", payload: formVal });
  };
  return (
    <div className="col-lg-12 col-xl-4">
      <div className="card">
        <div className="card-header">
          <h5 className="card-header-text">Update Event</h5>
        </div>
        <div className="card-block">
          <div className="row" id="sortable">
            <form onSubmit={updateEvent}>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Name</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Event Name"
                    name="eventName"
                    defaultValue={props.selectedEvent.name}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Date</label>
                <div className="col-sm-8">
                  <DatePicker
                    type="text"
                    className="form-control"
                    selected={eventDate}
                    onChange={(date) => setEventtDate(date)}
                  />
                </div>
              </div>
              <div className="col text-center">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
