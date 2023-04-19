import store from "../redux/store";
describe("Redux store test", () => {
  it("test", () => {
    const initialState = {
      exchange: {
        exchangeData: [],
        clickedPair: [],
        isLoading: false,
        error: null,
      },
    };
    expect(initialState).toEqual(store.getState());
  });
});
