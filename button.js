export function Button({ children, ...props }) {
  return (
    <button className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-700" {...props}>
      {children}
    </button>
  );
}
