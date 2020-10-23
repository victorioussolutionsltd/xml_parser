import { arrayToXml, xmlFromString } from "./xmlHelper";

describe("Create output from xml string", () => {
  test("it should throw an error xml output", () => {
    expect(() => {
      xmlFromString('<b><c></b>')
    }).toThrow();
  });
});