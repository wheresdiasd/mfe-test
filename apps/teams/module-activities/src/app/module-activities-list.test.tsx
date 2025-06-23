import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ActivitiesList } from './module-activities-list';
import * as useActivitiesHook from './use-activities';
import { mockActivities, mockUseActivitiesReturn, mockUseActivitiesLoading, mockUseActivitiesEmpty } from './__mocks__/mockData';

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

describe('ActivitiesList', () => {
  const mockRemoveActivity = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows loading state when loading is true', () => {
    mockUseActivities.mockReturnValue(mockUseActivitiesLoading);

    render(
      <TestWrapper>
        <ActivitiesList />
      </TestWrapper>
    );

    expect(screen.getByText('Loading activities...')).toBeTruthy();
  });

  it('shows empty state when no activities exist', () => {
    mockUseActivities.mockReturnValue(mockUseActivitiesEmpty);

    render(
      <TestWrapper>
        <ActivitiesList />
      </TestWrapper>
    );

    expect(screen.getByText('No activities found')).toBeTruthy();
    expect(screen.getByText('Recent Activities')).toBeTruthy();
    expect(screen.getByText('0')).toBeTruthy();
  });

  it('renders activities list when activities exist', () => {
    mockUseActivities.mockReturnValue(mockUseActivitiesReturn);

    render(
      <TestWrapper>
        <ActivitiesList />
      </TestWrapper>
    );

    expect(screen.getByText('Test Activity 1')).toBeTruthy();
    expect(screen.getByText('Test Activity 2')).toBeTruthy();
    expect(screen.getByText('Description for activity 1')).toBeTruthy();
    expect(screen.getByText('Description for activity 2')).toBeTruthy();
    expect(screen.getByText('task')).toBeTruthy();
    expect(screen.getByText('event')).toBeTruthy();
    expect(screen.getByText('3')).toBeTruthy();
  });

  it('displays formatted timestamps', () => {
    mockUseActivities.mockReturnValue(mockUseActivitiesReturn);

    render(
      <TestWrapper>
        <ActivitiesList />
      </TestWrapper>
    );

    const expectedDate1 = new Date('2023-01-01T00:00:00Z').toLocaleString();
    const expectedDate2 = new Date('2023-01-02T00:00:00Z').toLocaleString();
    
    expect(screen.getByText(expectedDate1)).toBeTruthy();
    expect(screen.getByText(expectedDate2)).toBeTruthy();
  });

  it('calls removeActivity with correct ID when delete button is clicked', () => {
    mockUseActivities.mockReturnValue({
      ...mockUseActivitiesReturn,
      removeActivity: mockRemoveActivity,
    });

    render(
      <TestWrapper>
        <ActivitiesList />
      </TestWrapper>
    );

    const deleteButtons = screen.getAllByLabelText('Remove activity');
    fireEvent.click(deleteButtons[0]);

    expect(mockRemoveActivity).toHaveBeenCalledWith('1');
    expect(mockRemoveActivity).toHaveBeenCalledTimes(1);
  });

  it('shows updated count and activities after removal', () => {
    const { rerender } = render(
      <TestWrapper>
        <ActivitiesList />
      </TestWrapper>
    );

    mockUseActivities.mockReturnValue(mockUseActivitiesReturn);

    rerender(
      <TestWrapper>
        <ActivitiesList />
      </TestWrapper>
    );

    expect(screen.getByText('3')).toBeTruthy();
    expect(screen.getByText('Test Activity 1')).toBeTruthy();
    expect(screen.getByText('Test Activity 2')).toBeTruthy();

    mockUseActivities.mockReturnValue({
      ...mockUseActivitiesReturn,
      activities: [mockActivities[1]],
      count: 1,
    });

    rerender(
      <TestWrapper>
        <ActivitiesList />
      </TestWrapper>
    );

    expect(screen.getByText('1')).toBeTruthy();
    expect(screen.queryByText('Test Activity 1')).toBeNull();
    expect(screen.getByText('Test Activity 2')).toBeTruthy();
  });
});