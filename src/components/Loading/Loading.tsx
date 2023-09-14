"use client";

function LoadingSpinner(): JSX.Element {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-12 h-12 rounded-full animate-spin border-y border-solid border-doit-green-text border-t-transparent shadow-md"></div>
      <p className="text-doit-green-text font-bold">Carregando...</p>
    </div>
  );
}

export default LoadingSpinner;
