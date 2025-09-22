export default function MyAlert({ type, children }) {
  const colors = {
    info: "bg-blue-100 text-blue-900",
    warning: "bg-yellow-100 text-yellow-900",
    success: "bg-green-100 text-green-900",
  };

  return (
    <div className={`p-4 rounded-lg ${colors[type]}`}>
      {children}
    </div>
  );
}
