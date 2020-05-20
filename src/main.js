import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/parallax";
import "./scripts/parallax__feedback";
import "./scripts/works";
import "./scripts/reviews";
import "./scripts/burger-menu";
import "./scripts/scrollTo";