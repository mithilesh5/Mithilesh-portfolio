export function Card({ children }) {
  return <div className="p-6 bg-gray-800 rounded-lg shadow-lg">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="mt-4">{children}</div>;
}
