import SinglyLinkedListApp from "./Features/DataStructuresApp/SinglyLinkedList/SinglyLinkedListApp";
import HomePage from "./pages/HomePages";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
      <>
         <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/data-structure/singlylinkedlist" element={<SinglyLinkedListApp/>}/>
        </Routes>
      </>
    );
}

export default App