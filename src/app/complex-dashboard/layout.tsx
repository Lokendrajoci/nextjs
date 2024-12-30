export default function DashboardLayout({
  children,
  notification,
  users,
  revenue,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <>
      <div className="h-96 w-96 bg-red-800">
        <h1>Dashboard</h1>
        <div>{children}</div>
        <div>{notification}</div>
        <div>{users}</div>
        <div>{revenue}</div>
      </div>
    </>
  );
}
