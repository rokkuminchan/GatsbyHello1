import React from "react";
import { render } from "@testing-library/react";
import Introduction from "./Introduction";

const introduction = {
  title: "テクノロジー",
  description:
    "World ITチームが習熟している主要なテクノロジーやツールをご紹介しています。詳細は、リンクからオフィシャル・サイトをご覧ください。",
};

test("renders learn react link", () => {
  const { getByText } = render(<Introduction data={introduction} />);
  const titleElement = getByText(/テクノロジー/i);
  expect(titleElement).toBeInTheDocument();
});
