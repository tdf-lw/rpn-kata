module.exports = {
  roots: ["<rootDir>/src/test"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(.)(test|spec).ts$",
  moduleFileExtensions: ["ts", "js"]
};
