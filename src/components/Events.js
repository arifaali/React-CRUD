import { useContext, useReducer, useState } from "react";
import "../assets/css/event.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { eventsListContext } from "./Home";
import AddEvents from "./AddEvents";
import UpdateEvents from "./UpdateEvent";

export default function Events() {
  const { setEvents } = useContext(eventsListContext);
  const { events } = useContext(eventsListContext);
  const [isShown, setIsShown] = useState(false);
  const [isUpdate, setisUpdate] = useState(false);
  const [selectedEvent, setselectedEvent] = useState({});

  //Show Add form
  const handleClick = (event) => {
    setIsShown((current) => !current);
    setisUpdate((current) => false);
  };
  //Show edit form
  const handleEditClick = (id) => {
    setisUpdate((current) => true);
    setIsShown((current) => false);
    events.map((obj) => {
      if (obj.id === id) {
        setselectedEvent(obj);
      }
    });
  };

  const deleteEvent = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => setEvents({ type: "deleteEvent", payload: id }),
        },
        {
          label: "No",
          //onClick: () => alert("Click No"),
        },
      ],
    });
  };

  return (
    <>
      <div className="page-content page-container">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-lg-12 col-xl-8">
              <div className="d-flex p-3 my-3 text-white-50 bg-purple rounded box-shadow">
                <div className="lh-100">
                  <h6 className="mb-0 text-white lh-100">Events</h6>
                </div>
              </div>
              <div className="card">
                <div className="">
                  <div className="my-3 p-3 bg-white rounded box-shadow">
                    <h6 className="border-bottom border-gray pb-2 mb-0 faPlus">
                      <i
                        className="fa fa-plus-circle"
                        title="Add new Event"
                        onClick={handleClick}
                      ></i>
                    </h6>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Event</th>
                          <th scope="col">Date</th>
                          <th scope="col">Edit</th>
                          <th scope="col">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {events.map(({ id, name, date }) => (
                          <tr key={id}>
                            <td>{name}</td>
                            <td>{date}</td>
                            <td>
                              <i
                                className="fa fa-pencil"
                                style={{ color: "#2d97a4" }}
                                onClick={() => handleEditClick(id)}
                              ></i>
                            </td>
                            <td>
                              <i
                                className="fa fa-trash"
                                style={{ color: "#aa3030" }}
                                onClick={() => deleteEvent(id)}
                              ></i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {isShown && <AddEvents />}
            {isUpdate && <UpdateEvents selectedEvent={selectedEvent} />}
          </div>
        </div>
      </div>
    </>
  );
}
