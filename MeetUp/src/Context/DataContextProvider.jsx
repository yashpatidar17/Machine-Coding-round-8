import { createContext, useState } from "react";
import { meetupdata } from "../DB/MeetUpData";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [meetupData, setmeetupData] = useState(meetupdata.meetups);
  return (
    <div>
      <DataContext.Provider value={{ item: 3, meetupData }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};
