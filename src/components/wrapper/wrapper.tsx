export function Wrapper({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`${className} w-full max-w-[720px] mx-auto px-4`}>
      {children}
    </div>
  );
}
