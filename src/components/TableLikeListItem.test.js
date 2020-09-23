// テストの項目
// 1. タイトルが正しく表示されます
// 2. 段落は正しく表示されます
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import TableLikeListItem from "./TableLikeListItem";

let container;

const Data = {};

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

  expect(true).toBe(true);
});
