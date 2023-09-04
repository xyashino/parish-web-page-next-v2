export const LoadingElement = () => (
  <div
    className="w-full h-full flex justify-center 0 z-20 pointer-events-auto"
    tabIndex={-1}
  >
    <div className="mt-[10%] flex flex-col items-center space-y-2">
      <div className="flex space-x-2" tabIndex={0}>
        <span className="bg-foreground w-4 aspect-square rounded-full animate-bounce delay-150" />
        <span className="bg-foreground w-4 aspect-square rounded-full animate-bounce delay-250" />
        <span className="bg-foreground w-4 aspect-square rounded-full animate-bounce delay-300" />
      </div>
      <p className="text-foreground text-xl font-mono italic">
        Wczytywanie ...
      </p>
    </div>
  </div>
);
