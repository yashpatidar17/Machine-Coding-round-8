import { useContext } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { useParams } from "react-router-dom";
import { Navbar } from "../Nav/Navbar";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import "./meetpage.css";
export const MeetupPage = () => {
  const { meetupData } = useContext(DataContext);
  const { ID } = useParams();

  const meetup = meetupData.find((item) => item.id === ID);

  return (
    <div>
      <Navbar />

      <div className="meetup-page">
        <div className="meetup-page-first">
          <h1>{meetup.title}</h1>
          <div className="hosting">
            <span>Hosted By:</span>
            <span>{meetup.hostedBy}</span>
          </div>
          <img src={meetup.eventThumbnail} className="thumbnail" />

          <div>
            <h2>Details:</h2>
            <p>{meetup.eventDescription}</p>
          </div>

          <div className="AD-card">
            <div className="AD-card">
              <h2>Additional Information: </h2>
              <div className="AD">
                <p>Dress Code :</p>
                <p>{meetup.additionalInformation.dressCode}</p>
              </div>
              <div className="AD">
                <p>Age Restriction :</p>
                <p>{meetup.additionalInformation.ageRestrictions}</p>
              </div>
            </div>

            <div className="tags">
              <h2>Event Tags:</h2>
              <div className="tags-first">
                {meetup.eventTags.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="location-info-card">
            <div className="time">
              <AccessTimeRoundedIcon />
              <p>
                {meetup.eventStartTime} to {meetup.eventEndTime}
              </p>
            </div>

            <div className="time">
              <LocationOnRoundedIcon />
              <p>{meetup.location}</p>
              <p>{meetup.address}</p>
            </div>
            <div className="time">
              <CurrencyRupeeRoundedIcon />
              <p className="price">{meetup.price}</p>
            </div>
          </div>

          <div>
            <h2>Speakers:({meetup.speakers.length})</h2>
            <div className="speaker-card">
              {meetup.speakers.map((item) => (
                <div key={item.name} className="speaker-card-first">
                  <img src={item.image} className="speaker" />
                  <span>{item.name}</span>
                  <span>{item.designation}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="rsvp">RSVP</button>
        </div>
      </div>
    </div>
  );
};
