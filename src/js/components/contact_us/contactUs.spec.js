import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import ContactUs from "./contactUs";

describe("ContactUs", function () {
  let wrapper;
  before(() => {
    wrapper = shallow(<ContactUs />);
  })
  it("should render the page title", () => {
    expect(wrapper.find(".page-title h2").text()).to.equal("We'll love to hear from you");
  });

  it("should render the contact form", () => {
    expect(wrapper.find("form .contact-form").children()).to.have.length(4);
  });

  it("should render the sub title", () => {
    expect(wrapper.find(".page-title h5").text()).to.equal("Please send us a message :)");
  });

  it("should render the email textbox", () => {
    expect(wrapper.contains(<input type="email" className="form-control" placeholder="somebody@email.com" required/>)).to.equal(true);
  });

  it("should render the textarea", () => {
    expect(wrapper.contains(<textarea className="form-control" placeholder="Type your message.." required></textarea>)).to.equal(true);
  });
});
