import TermekController from "./termekController";
import termekModel from "../models/termekModel" 
import  {expect, jest, test} from "@jest/globals";

const mockedModel = jest.mock("../models/termekModel", () => {
    
});

test("Sample test case", async () => {
    expect(true).toBe(true);
    const resultMock = {};
    mockedModel.getAll = jest.fn().mockedResolvedValues([{id : 1, nev : "Termék 1", ar : 1000, keszlet : 10}])
    await TermekController.getAll({ params: {} }, resultMock);
});