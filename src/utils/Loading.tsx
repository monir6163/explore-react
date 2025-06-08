export default function Loading({
  message = "Loading...",
}: {
  message?: string;
}) {
  return (
    <div
      className="flex justify-center items-center h-[calc(100vh)]
     bg-gray-100
     flex-col gap-5 text-center p-5 transition-opacity duration-500 ease-in-out
     animate-fade-in
    "
    >
      {/* <p className="text-7xl font-bold">{message}</p> */}
      <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin mt-5 border-red-500"></div>
      <p className="text-7xl font-bold hidden">{message}</p>
    </div>
  );
}
