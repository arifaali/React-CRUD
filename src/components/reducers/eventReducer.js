function eventReducer(state, item) {
  const TYPE = {
    UPDATE_EVENT: "updateEvent",
    DELETE_EVENT: "deleteEvent",
    ADD_EVENT: "addEvent",
  };
  switch (item.type) {
    case TYPE.ADD_EVENT:
      return [...state, item.payload];
    case TYPE.UPDATE_EVENT:
      const newState = state.map((obj) => {
        if (obj.id === item.payload.id) {
          return { ...obj, name: item.payload.name, date: item.payload.date };
        }
        return obj;
      });

      return [...newState];
    case TYPE.DELETE_EVENT:
      const test = state.filter((event) => {
        return event.id !== item.payload;
      });
      return [...test];
    default:
      return [...state];
  }
}
export default eventReducer;
