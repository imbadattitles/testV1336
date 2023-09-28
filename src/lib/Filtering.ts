import { Brigade } from "../store/firstPageSlice";

export const Filtering = (
  item: Brigade,
  value: number | null,
  type: "connection" | "department"
) => {
  switch (type) {
    case "connection":
      if (value === 0) return item.connectionStateId === value;
      if (value) return item.connectionStateId === value;
      else return true;
    case "department":
      if (value === 0) return item.department.id === value;
      if (value) return item.department.id === value;
      else return true;
  }
};
