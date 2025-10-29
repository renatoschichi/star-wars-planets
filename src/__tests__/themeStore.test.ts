import { useThemeStore } from '@/store/themeStore';
import { act } from 'react';

describe('Theme Store', () => {
  beforeEach(() => localStorage.clear());

  it('should initialize with light theme by default', () => {
    const theme = useThemeStore.getState().theme;
    expect(theme).toBe('light');
  });

  it('should toggle theme correctly', () => {
    act(() => {
      useThemeStore.getState().toggleTheme();
    });
    expect(useThemeStore.getState().theme).toBe('dark');

    act(() => {
      useThemeStore.getState().toggleTheme();
    });
    expect(useThemeStore.getState().theme).toBe('light');
  });
});