import App from './App'
import { shallow } from 'enzyme'

// Test 1: Write a test that checks to see if our `App` component renders without throwing an error.
it('App Component Renders Without Error', () => {
  const wrapper = shallow(<App />)
})

// Test 2: Write a test that checks if the button within the `App` component renders properly.
it("App Component Renders a Button", () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('[data-test="increment-button"]')

  expect(button.length).toBe(1)
})

// Test 3: Write a test which checks if the counter starts at 0.
it("Counter Starts At 0", () => {
  const wrapper = shallow(<App />)
  const count = wrapper.find('[data-test="count"]').text()

  expect(count).toBe("0")
})

// Test 4: Write a test which checks if the increment button increase the count.
it("Clicking Increment Button Increases Counter Display", () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('[data-test="increment-button"]')

  button.simulate('click')
})

// Test 5:
it("checks to see if the counter display renders properly", () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('[data-test="counter-display"]')

  expect(button.length).toBe(1)
})

// Test 6:
it("App Component Renders a Decrement Button", () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('[data-test="decrement-button"]')

  button.simulate('click')

  const count = wrapper.find('[data-test="count"]').text()

  expect(count).toBe("0")
})

// Test 7:
it("Count Is Unable to Go Below Zero and Throws Error", () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('[data-test="decrement-button"]')
  const errorMessage = wrapper.find('[data-test="error-message"]').text()

  button.simulate('click')

  expect(errorMessage).text().toEqual('The counter can not go below zero')
})

// Test 8:
it("Decrement Error Message Clears When Count Increment Higher Than 0", () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('[data-test="increment-button"]')
  const errorMessage = wrapper.find('[data-test="error-message"]').text()

  button.simulate('click')

  expect(errorMessage).text().toEqual('')
})

