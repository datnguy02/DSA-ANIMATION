import DataStructureApp from "./Features/DataStructuresApp/DataStructure/DataStructureApp";
import HomePage from "./pages/HomePages";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
      <>
         <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/data-structure/singlylinkedlist" element={<DataStructureApp  name="singlylinkedlist"/>}/>
          <Route path="/data-structure/binarysearchtree" element={<DataStructureApp  name="binarysearchtree"/>}/>
        </Routes>
      </>
    );
}

export default App