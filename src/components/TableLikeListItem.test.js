// テストの項目
// 1. タイトルが正しく表示されます
// 2. 段落は正しく表示されます
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import TableLikeListItem from "./TableLikeListItem";

let container;

const Data = {
  title: "言葉の壁",
  description: "普通の日本人と同じように、日本語の読み書きや会話ができる。",
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
    ReactDOM.render(<TableLikeListItem data={Data} />, container);
  });

  const title = container.querySelector("h1")
  const description = container.querySelector("p")

  expect(title.textContent).toBe(Data.title)
  expect(description.textContent).toBe(Data.description)

});
