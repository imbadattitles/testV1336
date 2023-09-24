import { AppDispatch } from "../store";

export const getItems = async (
  link: string,
  dispatch: AppDispatch,
  setLoading: any,
  setItems: any
) => {
  try {
    const res: any = await fetch(link).then((result) => result.json());
    await dispatch(setItems(res));
  } catch (e: any) {
    alert(`ошибка загрузки данных по адресу ${link}`);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getPoints = async (
  link: string,
  points: number,
  dispatch: AppDispatch,
  setLoading: any,
  setItems: any,
  setError?: (e: boolean) => void
) => {
  try {
    const res: any = await fetch(link + "?points=" + points).then((result) =>
      result.json()
    );
    await dispatch(setItems(res));
  } catch (e: any) {
    if (setError) {
      setError(true);
    }
  } finally {
    dispatch(setLoading(false));
  }
};
