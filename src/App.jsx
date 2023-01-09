import { useState } from "react";

// Data
import data from "./data/explorer";

// Components
// import FileExplorer from './components/FileExplorer';
import { FileExplorer } from "./components";

const App = () => {



  return (
    <div className="p-10 max-w-sm">
      <FileExplorer dir={data} />
    </div>
  );
};

export default App;
