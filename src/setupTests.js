// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
global.matchMedia =
  global.matchMedia ||
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: false,
      media: 'query',
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  };

jest.mock('firebase/firestore', () => {
  return {
    getFirestore: jest.fn(),
  };
});
