// Skeleton.tsx
export const Skeleton = () => {
    return (
      <div className="flex flex-col justify-center items-center bg-gray-200 shadow-md p-4 border rounded-lg animate-pulse">
        <div className="bg-gray-300 mb-4 rounded-md w-full h-32"></div>
        <div className="bg-gray-300 mb-2 rounded w-3/4 h-6"></div>
        <div className="bg-gray-300 rounded w-1/2 h-6"></div>
      </div>
    );
  };