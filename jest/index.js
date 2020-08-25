export function mockProps({props = {}, params = {}} = {}) {
  const {navigation} = props;
  const navigate = (navigation && navigation.navigate) || jest.fn();
  const goBack = (navigation && navigation.goBack) || jest.fn();
  const setParams = (navigation && navigation.setParams) || jest.fn();
  const mockNavigation = {navigation: {navigate, goBack, setParams}};
  return {...{route: {params}}, ...props, ...mockNavigation};
}

export * from '@testing-library/react-native';
