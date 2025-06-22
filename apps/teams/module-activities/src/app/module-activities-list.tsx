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

  if (isLoading) return <div>Loading activities...</div>;
  
  if (error) return <div>Error loading activities: {(error as Error).message}</div>;

  return (
    <div className="activities-list">
      <h2>Recent Activitizes</h2>
      {/* <div className="rxjs-demo">
        <h3>Activity Types (via RxJS):</h3>
        <ul>
          {rxjsActivities.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </div> */}
      {activities.length === 0 ? (
        <p>No activities found</p>
      ) : (
        <ul>
          {activities.map((activity) => (
            <li key={activity.id} className="activity-item">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <div className="activity-meta">
                <span>Type: {activity.type}</span>
                <time dateTime={activity.timestamp}>
                  {new Date(activity.timestamp).toLocaleString()}
                </time>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ActivitiesList;