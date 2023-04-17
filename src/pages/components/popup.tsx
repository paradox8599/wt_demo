export default function PopUp({ children }: { children?: string }) {
  return (
    <>
      <div
        className="w-full bg-green-500"
        style={{
          transition: "height 0.5s ease-in-out",
        }}
      >
        <div className="text-center text-white">{children}</div>
      </div>
    </>
  );
}
