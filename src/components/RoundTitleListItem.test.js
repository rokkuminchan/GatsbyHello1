// テストの項目
// 1. タイトルが正しく表示されます
// 2. 段落は正しく表示されます
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import RoundTitleListItem from "./RoundTitleListItem";

let container;

const Data = {
  title: "MISSION",
  description: "日本のに求められる高度IT人材を派遣する。",
};

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render a view component from data", () => {
  act(() => {
    ReactDOM.render(<RoundTitleListItem data={Data} />, container);
  });
  const title = container.querySelector("h1")
  const description = container.querySelector("p")

  expect(title.textContent).toBe(Data.title)
  expect(description.textContent).toBe(Data.description)

});
