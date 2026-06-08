import { render, fireEvent, act } from '@testing-library/react';
import { expect, it, describe, vi } from 'vitest';
import BackToTop from '../BackToTop';

describe('BackToTop', () => {
  it('is hidden when page is at top', () => {
    const { queryByRole } = render(<BackToTop />);
    expect(queryByRole('button')).toBeNull();
  });

  it('appears after scrolling down 300px', () => {
    const { getByRole } = render(<BackToTop />);
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
      fireEvent.scroll(window);
    });
    expect(getByRole('button')).toBeTruthy();
  });

  it('scrolls to top on click', () => {
    window.scrollTo = vi.fn();
    const { getByRole } = render(<BackToTop />);
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 400, writable: true });
      fireEvent.scroll(window);
    });
    fireEvent.click(getByRole('button'));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});