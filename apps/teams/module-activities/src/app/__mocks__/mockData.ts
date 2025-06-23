/// <reference types="jest" />
import { Activity } from '../module-activities-store';

export const mockActivities: Activity[] = [
  {
    id: '1',
    title: 'Test Activity 1',
    description: 'Description for activity 1',
    type: 'task',
    timestamp: '2023-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Test Activity 2',
    description: 'Description for activity 2',
    type: 'event',
    timestamp: '2023-01-02T00:00:00Z',
  },
  {
    id: '3',
    title: 'Test Activity 3',
    description: 'Description for activity 3',
    type: 'view',
    timestamp: '2023-01-03T00:00:00Z',
  },
];

export const singleMockActivity: Activity = mockActivities[0];

export const emptyActivities: Activity[] = [];

export const mockUseActivitiesReturn = {
  activities: mockActivities,
  loading: false,
  count: mockActivities.length,
  addActivity: jest.fn(),
  removeActivity: jest.fn(),
  refresh: jest.fn(),
};

export const mockUseActivitiesLoading = {
  ...mockUseActivitiesReturn,
  loading: true,
  activities: [],
  count: 0,
};

export const mockUseActivitiesEmpty = {
  ...mockUseActivitiesReturn,
  activities: [],
  count: 0,
};