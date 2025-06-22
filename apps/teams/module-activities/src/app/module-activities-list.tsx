// In apps/teams/module-activities/src/app/module-activities-list.tsx

import { useActivities } from './use-activities';
import { useEffect, useState } from 'react';

export function ActivitiesList() {
  const { activities, isLoading, error, activities$ } = useActivities();
  const [rxjsActivities, setRxjsActivities] = useState<string[]>([]);
  
  useEffect(() => {
    const subscription = activities$.subscribe(activities => {
      const types = activities.map(a => a.type);
      setRxjsActivities(types);
    });
    
    return () => subscription.unsubscribe();
  }, [activities$]);

  if (isLoading) {
    return <div className="p-4 text-center">Loading activities...</div>;
  }
  
  if (error) {
    return <div className="p-4 text-red-500">Error loading activities: {(error as Error).message}</div>;
  }

  return (
    <div className="activities-list bg-white shadow rounded-lg max-w-2xl mx-auto my-4">
      <div className="bg-blue-500 text-white px-4 py-3">
        <h2 className="text-lg font-semibold">Recent Activities</h2>
      </div>
      
      {activities.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          <p>No activities found</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <li key={activity.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between">
                <h3 className="font-medium text-gray-900">{activity.title}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(activity.timestamp).toLocaleString()}
                </span>
              </div>
              <p className="mt-1 text-gray-600">{activity.description}</p>
              <div className="mt-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {activity.type}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ActivitiesList;