import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import CurrencyPair from "../components/CurrencyPair";

describe("CurrencyPair component test", () => {
  it("Render Currency pair", () => {
    const exchangeData = {
      ticker: "USD/JPY",
      bid: "134.060",
      ask: "134.060",
      open: "134.122",
      low: "133.984",
      high: "134.138",
      changes: -0.06200000000001182,
      date: "2023-04-18 18:48:20",
    };
    const { container } = render(
      <BrowserRouter>
          <CurrencyPair exchangeItem={exchangeData}/>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
