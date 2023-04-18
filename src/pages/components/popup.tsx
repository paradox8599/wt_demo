export default function PopUp({
  children,
  className,
}: {
  children?: string;
  className?: string;
}) {
  return (
    <>
      <div>
        <div
          className={`fixed z-50 w-full bg-green-500 ${children ? "py-1" : ""}`}
        >
          <div className="text-center text-white">{children}</div>
        </div>
      </div>
    </>
  );
}
