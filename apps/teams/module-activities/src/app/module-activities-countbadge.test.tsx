import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ActivityCount } from './module-activities-countbadge';
import * as useActivitiesHook from './use-activities';
import { mockUseActivitiesReturn, mockUseActivitiesEmpty } from './__mocks__/mockData';

jest.mock('./use-activities');

const mockUseActivities = useActivitiesHook.useActivities as jest.MockedFunction<typeof useActivitiesHook.useActivities>;

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

describe('ActivityCount', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders count when count is greater than 0', () => {
    mockUseActivities.mockReturnValue({
      ...mockUseActivitiesReturn,
      count: 5,
    });

    render(
      <TestWrapper>
        <ActivityCount />
      </TestWrapper>
    );

    expect(screen.getByText('5')).toBeTruthy();
  });

  it('returns null when count is 0', () => {
    mockUseActivities.mockReturnValue(mockUseActivitiesEmpty);

    const { container } = render(
      <TestWrapper>
        <ActivityCount />
      </TestWrapper>
    );

    expect(container.firstChild).toBeNull();
  });

  it('displays the correct count value', () => {
    mockUseActivities.mockReturnValue({
      ...mockUseActivitiesReturn,
      count: 42,
    });

    render(
      <TestWrapper>
        <ActivityCount />
      </TestWrapper>
    );

    expect(screen.getByText('42')).toBeTruthy();
  });
});