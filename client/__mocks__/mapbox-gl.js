module.exports = {
  'default': {
  accessToken: '',
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
      addControl: jest.fn(),
      on: jest.fn(),
      remove: jest.fn(),
      fitBounds: jest.fn(),
  })),
  NavigationControl: jest.fn(),
  }
};