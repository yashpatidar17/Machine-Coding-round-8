import { useContext } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import "./meet.css";
import { Link } from "react-router-dom";
export const MeetupCard = () => {
  const { meetupData } = useContext(DataContext);
  return (
    <div className="card-container">
      <div className="navbar-container-first">
        <div>
          <h2>Meetup Events</h2>
        </div>
        <div>
          <select>
            <option>Select Event Type</option>
            <option>Offline</option>
            <option>Online</option>
          </select>
        </div>
      </div>

      <div className="card">
        {meetupData.map((item) => (
          <div key={item.id} className="card-first">
            <Link to={`/meetup/${item.id}`}>
              <img src={item.eventThumbnail} className="thumbnail" />
            </Link>

            <div className="info">
              <span>{item.eventStartTime}</span>
              <span>{item.title}</span>
            </div>
            <div className="event-div">
              <p className="event">{item.eventType} Event</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
