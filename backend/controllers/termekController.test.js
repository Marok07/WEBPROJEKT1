import TermekController from "./termekController";
import  {expect, jest, test} from "@jest/globals";

const termekModelMock = {
    getAll: jest.fn(),
    getById: jest.fn(),
    create: jest.fn(),
};

jest.unstable_mockModule("../models/termekModel.js", () => ({
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
    //SETUP
    const products = [{ id: 1 , nev: "Keyboard"}];
    termekModelMock.getAll.mockResolvedValue(products);
    const res = createResponse;
    //ACT
    const result = await TermekController.getAll({
        params: {}},res);
    //ASSERT
    expect(result).toBeUndefined();
});