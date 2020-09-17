// テストの項目
// 1. タイトルが正しく表示されます
// 2. 段落は正しく表示されます
import React from "react"
import ReactDOM from "react-dom"
import { act } from "react-dom/test-utils"
import Card from "./Card"
import AmpIcon from "../images/amp.jpeg"

let container

const Data = {
  title: "AMP",
  description:
    "資産管理、証券・保険の業務システム、生産管理システムなど、多様な金融・業務システム開発に対応可能です。",
  img: {
    src: AmpIcon,
    alt: "AMP",
  },
  link: "https://amp.dev",
}

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it("can render a view component from data", () => {
  act(() => {
    ReactDOM.render(<Card data={Data} />, container)
  })
  const title = container.querySelector("h1")
  const description = container.querySelector("p")
  const logo = container.querySelector("img")

  expect(logo.src).toMatch(new RegExp(Data.img.src))
  expect(logo.alt).toContain(logo.alt)
  expect(title.textContent).toBe(Data.title)
  expect(description.textContent).toBe(Data.description)
})
