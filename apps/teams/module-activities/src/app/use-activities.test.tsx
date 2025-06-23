import { renderHook, act, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useActivities } from './use-activities';
import * as store from './module-activities-store';
import { mockActivities } from './__mocks__/mockData';

jest.mock('./module-activities-store');

const mockFetchActivities = store.fetchActivities as jest.MockedFunction<typeof store.fetchActivities>;

const mockDispatchEvent = jest.fn();
const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();

Object.defineProperty(window, 'dispatchEvent', {
  value: mockDispatchEvent,
  writable: true,
});

Object.defineProperty(window, 'addEventListener', {
  value: mockAddEventListener,
  writable: true,
});

Object.defineProperty(window, 'removeEventListener', {
  value: mockRemoveEventListener,
  writable: true,
});

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
}

function TestWrapper({ children }: { children: React.ReactNode }) {
  const queryClient = createTestQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

describe('useActivities', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches activities and returns correct initial state', async () => {
    mockFetchActivities.mockResolvedValue(mockActivities);

    const { result } = renderHook(() => useActivities(), {
      wrapper: TestWrapper,
    });

    expect(result.current.loading).toBe(true);
    expect(result.current.activities).toEqual([]);
    expect(result.current.count).toBe(0);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.activities).toEqual(mockActivities);
    expect(result.current.count).toBe(3);
  });

  it('removes activity by id', async () => {
    mockFetchActivities.mockResolvedValue(mockActivities);

    const { result } = renderHook(() => useActivities(), {
      wrapper: TestWrapper,
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.count).toBe(3);

    act(() => {
      result.current.removeActivity('1');
    });

    await waitFor(() => {
      expect(result.current.count).toBe(2);
    });

    expect(result.current.activities).toHaveLength(2);
    expect(result.current.activities[0].id).toBe('2');
    expect(result.current.activities.find(a => a.id === '1')).toBeUndefined();
  });

  it('handles removing non-existent activity', async () => {
    mockFetchActivities.mockResolvedValue(mockActivities);

    const { result } = renderHook(() => useActivities(), {
      wrapper: TestWrapper,
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.count).toBe(3);

    act(() => {
      result.current.removeActivity('non-existent');
    });

    await waitFor(() => {
      expect(result.current.count).toBe(3);
    });

    expect(result.current.activities).toEqual(mockActivities);
  });

  it('refreshes activities when refresh is called', async () => {
    mockFetchActivities.mockResolvedValue(mockActivities);

    const { result } = renderHook(() => useActivities(), {
      wrapper: TestWrapper,
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    mockFetchActivities.mockClear();

    act(() => {
      result.current.refresh();
    });

    expect(mockFetchActivities).toHaveBeenCalled();
  });
});