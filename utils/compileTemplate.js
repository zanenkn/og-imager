const Handlebars = require("handlebars");
const { templateHTML } = require("./template");

function getCompiledHTML({ avatar, name, location }) {
  return Handlebars.compile(templateHTML)({
    avatar: avatar,
    name: name,
    location: location,
  });
}

module.exports = { getCompiledHTML };