import { Filtering } from "./Filtering";

describe("Filtering", () => {
  const res = [
    { connectionStateId: 0, department: { id: 1 }, name: "0" },
    { connectionStateId: 1, department: { id: 2 }, name: "1" },
    { connectionStateId: 1, department: { id: 1 }, name: "2" },
    { connectionStateId: 0, department: { id: 1 }, name: "3" },
  ];

  test("Корректное значение connection", () => {
    const filter = res.filter((item) => Filtering(item, 0, "connection"));
    expect(filter).toEqual([res[0], res[3]]);
  });

  test("Корректное значение department", () => {
    const filter = res.filter((item) => Filtering(item, 1, "department"));
    expect(filter).toEqual([res[0], res[2], res[3]]);
  });

  test("Корректное значение department и connection", () => {
    const department = res.filter((item) => Filtering(item, 1, "department"));
    expect(department).toEqual([res[0], res[2], res[3]]);
    const connection = res.filter((item) => Filtering(item, 0, "connection"));
    expect(connection).toEqual([res[0], res[3]]);
  });

  test("Фильтр не выбран", () => {
    const filter = res.filter((item) => Filtering(item, null, "connection"));
    const filter2 = filter.filter((item) =>
      Filtering(item, null, "department")
    );
    expect(filter2).toEqual(res);
  });
});
