import NavBar from "./components/nav/NavBar";
import DataStructureApp from "./Features/DataStructuresApp/DsApp/DataStructureApp";
import HomePage from "./pages/HomePages";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
      <>
         <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/data-structure/singlylinkedlist" element={<DataStructureApp  name="singlylinkedlist"/>}/>
        </Routes>
      </>
    );
}

export default App