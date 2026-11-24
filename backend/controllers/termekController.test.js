import TermekController from "./termekController";
import  {expect, jest, test} from "@jest/globals";

const termekModelMock = {
    getAll: jest.fn(),
    getById: jest.fn(),
    create: jest.fn(),
};

jest.unstable_mockModule("..models/termekModel.js", () => ({
    default: termekModelMock,
}));

const createResponse = () => {
    const res = {
        status: jest.fn(),
        json: jest.fen(),
    }
    res.status.mockReturnValue(res);
    res.json.mockReturnValue(res);
    return res;
}

test("Sample test case", async () => {
    expect(true).toBe(true);
    const resultMock = {};
    mockedModel.getAll = jest.fn().mockedResolvedValues([{id : 1, nev : "Termék 1", ar : 1000, keszlet : 10}])
    await TermekController.getAll({ params: {} }, resultMock);
});