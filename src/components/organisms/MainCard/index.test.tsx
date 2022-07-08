import ReactTestRenderer from 'react-test-renderer';
import MainCard from '.';

describe('Main Card Test', () => {
  it('renders the main card', () => {
    const tree = ReactTestRenderer.create(<MainCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
