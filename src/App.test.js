//import React from 'react'; import ReactDOM from 'react-dom';

import React from 'react';
import ReactDOM from 'react-dom';

//TODO: Import Components import Router from './containers/Router';
import {checkConnected, testHello, nextPage, prevPage, updateAPI} from "./jest_tests/main";

//TODO: default test
describe("Should display hello", () => {
    it("should display hello", () => {
        expect(testHello()).toBe("Hello testing");
    });
    it("should fail testHello", () => {
        expect(testHello()).not.toBe(" testing");
    });
    //* Test updateAPI

});
describe("Test functions from Main Component", () => {
    //* Test nextPage
    it("should increment nextPage, and not increment 25 -> 26", () => {
        expect(nextPage(1)).toBe(2);
        expect(nextPage(25)).toBe(25);
        expect(nextPage(25)).not.toBe(26);
    })

    //* Test prevPage

    it("should decrement prevPage and not decrement 1 to 0", () => {
        expect(prevPage(25)).toBe(24);
        expect(prevPage(1)).toBe(1);
        expect(prevPage(1)).not.toBe(0);
    });
    //* Test updateAPI
    it("Should update info in State", () => {
        const info = {
            message: "This is info it works"
        };
        const results = {
            name: "This works"
        };
        //!- New Function toMatchObject
        expect(updateAPI(info)).toMatchObject({info, results: [], Connected: true});
        expect(updateAPI(info, results)).toMatchObject({info, results: [], Connected: true});
      }); //end
}); //end describe