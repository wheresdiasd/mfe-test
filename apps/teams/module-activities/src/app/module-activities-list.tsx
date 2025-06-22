import { useActivities } from "./use-activities";

export function ActivitiesList() {
  const { activities, loading, removeActivity } = useActivities();

  if (loading) {
    return <div className="p-4 text-center">Loading activities...</div>;
  }

  return (
    <div className="activities-list bg-white shadow rounded-lg max-w-2xl mx-auto my-4">
      <div className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Recent Activities</h2>
        <span className="text-sm bg-white text-blue-500 px-2 py-1 rounded-full font-bold">
          {activities.length}
        </span>
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
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-3">
                    {new Date(activity.timestamp).toLocaleString()}
                  </span>
                  <button
                    onClick={() => removeActivity(activity.id)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Remove activity"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                    </svg>
                  </button>
                </div>
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
