import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import Experience from "./components/Experience";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import "./index.css";

function App() {
  const [section, setSection] = useState(0);

  return (
    <Canvas shadows camera={{ position: [0, 8, 0], fov: 50 }}>
      <color attach="background" args={["#8960F2"]} />
      <ScrollControls pages={5} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} />
        <Scroll>
          <Experience section={section} setSection={setSection} />
        </Scroll>
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
