import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import validateEmail from "./util.js";
import LoginPresentational from "./login.js";

describe("user validation", () => {
  it("return false when user is not a valid email", () => {
    // preparation
    const user = "manuel";
    //ejecution
    const isTheUserValid = validateEmail(user);

    //verfication
    expect(isTheUserValid).toEqual(false);
  });
  it("return true when user has valid email", () => {
    // preparation
    const user = "manuel@me.com";
    //ejecution
    const isTheUserValid = validateEmail(user);

    //verfication
    expect(isTheUserValid).toEqual(true);
  });
});
describe("form", () => {
  it("display error message when user is not valid", () => {
    render(<LoginPresentational isUserNameValid={false} />);

    expect(screen.getAllByText("user name invalid")).toBeTruthy();
  });
  it("display error message when password is not valid", () => {
    render(<LoginPresentational isUserPasswordValid={false} />);

    expect(
      screen.getAllByText("Por favor ingrese password correcto")
    ).toBeTruthy();
  });
});
