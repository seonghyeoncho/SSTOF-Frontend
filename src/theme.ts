const size = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1024px",
};

const theme = {
  backgroundColor: "#06090F",
  blueColor: "#58A6FF",
  onFocusBackgroundColor: "#18232F",
  greenColor: "#0ba325",
  redColor: "#e63c1e",
  mainColor: "#909090",
  themeColor: "#1B7EBC",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
