import logo from "./logo.svg";
import "./App.css";
import MapPage from "./components/MapPage";
import TreeCollapse from "./components/TreeCollapse";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <>
      {/* <MapPage /> */}
      <div
        style={{ width: "4%", float: "left", borderRight: "2px dashed blue" }}
      >
        <SideMenu />
      </div>

      <div style={{ width: "95%", float: "left" }}>
        <TreeCollapse />
      </div>
    </>
  );
}

export default App;
