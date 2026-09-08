const AdminLayout = () => {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};
export default AdminLayout;
