import { CSSProperties } from "react";

const BODY: CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

const TITLE_TXT: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const CARD_CONTAINER: CSSProperties = {
  width: "48%",
  display: "flex",
  backgroundColor: "#ffffff",
  flexDirection: "row",
  minHeight: 100,
  padding: 10,
  borderRadius: 10,
  boxShadow: "0, 0, 0, #0f0",
  borderStyle: "solid",
  borderWidth: 0.3,
  borderColor: "#aaa",
  marginTop: 15,
};
const CARD_BODY: CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  paddingLeft: 10,
};

const TITLE = {
  ...TITLE_TXT,
  marginRight: 5,
};

const BOTTOM_LABEL: CSSProperties = {
  ...TITLE_TXT,
  backgroundColor: "#ab534500",
  padding: 5,
  borderWidth: 0.5,
  borderColor: "#aaa",
  borderStyle: "solid",
  marginRight: 5,
  borderRadius: 10,
  flexDirection: "row",
};

const LANG_ICON: CSSProperties = {
  width: 10,
  height: 10,
  borderRadius: 10,
  backgroundColor: "red",
  marginRight: 2,
};

const BUILDBY_CARD: CSSProperties = {
  display: "flex",
  backgroundColor: "#ab534500",
  padding: 5,
  borderWidth: 0.2,
  borderColor: "#eee",
  borderStyle: "solid",
  marginRight: 5,
  borderRadius: 10,
  flexDirection: "row",
  alignItems: "center",
  minWidth: "25%",
  marginTop: 15,
};

const IMG: CSSProperties = {
  width: 50,
  height: 50,
  borderRadius: 25,
  objectFit: "cover",
  marginRight: 10,
};

export {
  BODY,
  CARD_CONTAINER,
  TITLE_TXT,
  CARD_BODY,
  TITLE,
  BOTTOM_LABEL,
  LANG_ICON,
  BUILDBY_CARD,
  IMG,
};
