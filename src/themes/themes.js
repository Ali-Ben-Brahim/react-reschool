// Currrent combination
let cc = 1;

const combinations = [
  
 
 
  ["#477FF0", "#03379e", "#3e78ff", "#4141cc"],
  ["#21A3A3", "#135757", "#00D3BA", "#207373"],
  ["#26580F", "#378805", "#C5E90B", "#86DC3D"],
];

export const themeL = {
  palette: {
    type: "light",
    primary: {
      main: combinations[cc][0],
    },
    secondary: {
      main: combinations[cc][1],
    },
  },
  typography: {
    fontFamily: "Ubuntu, Roboto, Arial, sans-serif",
  },
};

export const themeD = {
  palette: {
    type: "dark",
    primary: {
      main: combinations[cc][2],
    },
    secondary: {
      main: combinations[cc][3],
    },
  },
  typography: {
    fontFamily: "Ubuntu, Roboto, Arial, sans-serif",
  },
};
