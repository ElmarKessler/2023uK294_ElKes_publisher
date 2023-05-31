import { render, screen } from '@testing-library/react';
import App from './App';

const ensureElementStructureBySearchText = (searchText: string) => {
  const element = screen.getByText(searchText);
  expect(element).toBeInTheDocument();
  const item = element.parentElement;
  expect(item).toBeInTheDocument();
  if (item) {
    expect(item.classList).toContain('MuiGrid-item');
    const container = item.parentElement;
    expect(container).toBeInTheDocument();
    container && expect(container.classList).toContain('MuiGrid-container');
  }

};

test('renders learn react link', () => {
  render(<App />);

  ensureElementStructureBySearchText("Form here");
  ensureElementStructureBySearchText("List here");
});
