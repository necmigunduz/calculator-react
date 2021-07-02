import operate from "../logic/operate";

describe("operate", () => {
  it("summation", () => {
    const result = operate(1, 3, "+");
    expect(result).toStrictEqual("4");
  });

  it("subtraction", () => {
    const result = operate(3, 1, "-");
    expect(result).toStrictEqual("2");
  });

  it("multiplication", () => {
    const result = operate(2, 3, "*");
    expect(result).toStrictEqual("6");
  });

  it("division", () => {
    const result = operate(1, 4, "/");
    expect(result).toStrictEqual("0.25");
  });
});
