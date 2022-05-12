import { useState } from "react";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <div className="bg-[#0F172A] min-h-screen w-full text-white container mx-auto">
      <MainRouter></MainRouter>
    </div>
  );
}

export default App;
