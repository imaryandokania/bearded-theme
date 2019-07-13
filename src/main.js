const syntax = require("./syntax");
const ui = require("./ui");
const fs = require("fs");

const lightTheme = {
  blue: "#318bc7",
  default: "#000000",
  green: "#4bb46e",
  greenalt: "#99c24e",
  grey: "#808080",
  orange: "#ff7728",
  pink: "#cb55e2",
  primary: "#8544ff",
  primaryalt: "#c7a8ff",
  purple: "#af6bfd",
  red: "#ff4949",
  salmon: "#e4567c",
  transparent: "#00000000",
  turquoize: "#4fb99a",
  uiborder: "#caced4",
  uibackground: "#ffffff",
  uibackgroundalt: "#ebecee",
  yellow: "#e09914"
};
const darkTheme = {
  blue: "#318bc7",
  default: "#FFFFFF",
  green: "#4bb46e",
  greenalt: "#99c24e",
  grey: "#808080",
  orange: "#ff7728",
  pink: "#cb55e2",
  primary: "#8544ff",
  primaryalt: "#322250",
  purple: "#af6bfd",
  red: "#ff4949",
  salmon: "#e4567c",
  transparent: "#00000000",
  turquoize: "#4fb99a",
  uiborder: "#272c33",
  uibackground: "#17191d",
  uibackgroundalt: "#1b1d22",
  yellow: "#e09914"
};

const base = {
  $schema: "vscode://schemas/color-theme",
  name: "BeardedTheme Light",
  colors: ui.body(lightTheme),
  tokenColors: syntax.body(lightTheme)
};

const basedark = {
  $schema: "vscode://schemas/color-theme",
  name: "BeardedTheme",
  colors: ui.body(darkTheme),
  tokenColors: syntax.body(darkTheme)
};

fs.writeFile("themes/bearded-theme-light.json", JSON.stringify(base), function(
  err,
  result
) {
  if (err) console.log("error", err);
});

fs.writeFile("themes/bearded-theme.json", JSON.stringify(basedark), function(
  err,
  result
) {
  if (err) console.log("error", err);
});