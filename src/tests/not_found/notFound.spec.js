import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import NotFoundPage from '../../js/components/not_found/notFound';

const NotFound = () => {
    return mount(<NotFoundPage />);
}
describe("NotFound", () => {
  const NotFoundWrapper = NotFound();
  it("should render the 404 text", () => {
    expect(NotFoundWrapper.find(".page-title").childAt(0).text()).toEqual("404. No one can find this page :(");
  });

  it("should render the not-found-text", () => {
    // expect(NotFoundWrapper.find("p .not-found-text").text()).toEqual("The entire Teencode community - students, facilitators, school administrators, parents and partners organizations - are also not able to find this page");
  });

  it("should render the home page button", () => {
    expect(NotFoundWrapper.find(".homepage-redirect-text a").first().html()).toEqual('<a href="/" class="btn btn-outline">Home Page</a>');
  });

  it("should render the curriculum button", () => {
    expect(NotFoundWrapper.find(".homepage-redirect-text a").at(1).html()).toEqual('<a href="/curriculum" class="btn btn-outline">Curriculum</a>');
  })
});
