import "./Activities.css";
import { Activity } from "./Activity/Activity";

export const Activities = ({conditions}) => {
  const activities = [
    {
      name: "Running",
      temp: [40, 70],
      wind: [0, 10],
      rain: [0, 30],
      snow: [0, 30],
      humidity: [0, 60],
    },
    {
      name: "Skiing",
      temp: [20, 60],
      wind: [0, 15],
      rain: [0, 10],
      snow: [50, 100],
      humidity: [0, 100],
    },
    {
      name: "Fishing",
      temp: [40, 70],
      wind: [0, 10],
      rain: [0, 30],
      snow: [0, 30],
      humidity: [0, 100],
    },
  ];

  const activityComponents = activities.map(activity => (
    <Activity activity={activity} key={activity.name} conditions={conditions}/>
  ));

  return <div className="activities-parent">{activityComponents}</div>;
};
