"use strict";

import logger from "@strapi/logger";

const {
  winston,
  formats: { prettyPrint, levelFilter },
} = logger;

export default {
  // transports: [
  //   new winston.transports.Console({
  //     level: "warn",
  //     format: winston.format.combine(
  //       levelFilter("http"),
  //       prettyPrint({ timestamps: "YYYY-MM-DD hh:mm:ss.SSS" })
  //     ),
  //   }),
  // ],
  settings: {
    logger: {
      level: "error",
      transports: ["console"],
    },
  },
};
