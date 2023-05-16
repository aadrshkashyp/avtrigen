const jdenticon = require("jdenticon");
const crypto = require("crypto");
const faker = require("faker");

exports.generate = (size, type = "icon") => {
  if (type === "human") {
    return faker.image.avatar();
  } else {
    const value = crypto.randomBytes(10).toString("hex");
    const svg = jdenticon.toSvg(value, size);
    return svg;
  }
};
