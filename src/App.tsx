import "./App.css";
import Header from "./components/layout/Header";
import SideList from "./components/layout/SideList";
import TasksPanel from "./components/layout/TasksPanel";

function App() {
  return (
    <>
      <Header />
      <div className="flex h-full">
        <SideList />
        <TasksPanel className="flex-1" />
      </div>
    </>
  );
}

export default App;
