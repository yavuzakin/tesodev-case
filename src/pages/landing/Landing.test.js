import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import Landing from "./Landing";
import store from "../../redux/store";

test("On initial render, logo image, input field and search button should be displayed", () => {
  render(
    <Provider store={store}>
      <Router>
        <Landing />
      </Router>
    </Provider>
  );
  expect(
    screen.getByRole("img", {
      name: /logo/i,
    })
  ).toBeDefined();
  expect(screen.getByRole("textbox")).toBeDefined();
  expect(
    screen.getByRole("button", {
      name: /search/i,
    })
  ).toBeDefined();
});

test("When a valid value is entered and the search button is clicked, result list under the input field should be displayed", () => {});
test("When result list is displayed and show more is clicked, it should navigate to search-results page", () => {});
