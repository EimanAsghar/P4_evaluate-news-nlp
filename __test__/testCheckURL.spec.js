import {checkURL} from "../src/client/js/checkURL"

describe("Testing the Check URL functionality", () => {

    test("Testing the checkURL() function", () => {
       
        expect(checkURL("https://api.meaningcloud.com/sentiment-2.1")).toEqual("true");
    })});