const activities = [
  {
    name: "Running",
    temp: {values: [40, 70], enabled: true},
    wind: {values: [0, 10], enabled: true},
    rain: {values: [0, 30], enabled: true},
    snow: {values: [0, 30], enabled: true},
    humidity: {values: [0, 60], enabled: true}
  },
  {
    name: "Skiing",
    temp: {values: [20, 60], enabled: true},
    wind: {values: [0, 15], enabled: true},
    rain: {values: [0, 10], enabled: true},
    snow: {values: [50, 100], enabled: true},
    humidity: {values: [0, 100], enabled: false}
  },
  {
    name: "Fishing",
    temp: {values: [40, 70], enabled: true},
    wind: {values: [0, 10], enabled: true},
    rain: {values: [0, 30], enabled: true},
    snow: {values: [0, 30], enabled: true},
    humidity: {values: [0, 100], enabled: false}
  },
];

export default activities;
