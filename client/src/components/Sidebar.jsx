import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
const Sidebar = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1">
            <h2>QUICKPAY</h2>
          </MenuItem>
          <MenuItem> Dashboard </MenuItem>
          <MenuItem> Invoices </MenuItem>
          <MenuItem> Charts </MenuItem>
          <MenuItem> Wallets </MenuItem>
          <MenuItem> Transactions </MenuItem>
          <MenuItem> Settings </MenuItem>
          <MenuItem> Logout </MenuItem>
        </Menu>
      </Sidebar>
      <h1>WELCOME TO QUICKPAY</h1>
    </div>
  );
};
export default Sidebar;