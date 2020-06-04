import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

// import "./scripts/scrollTo";

import "./scripts/parallax";
import "./scripts/parallax__feedback";
import "./scripts/reviews";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/burger-menu";