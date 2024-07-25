import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
<link href="./output.css" rel="stylesheet"></link>;

function App() {
  const [section, setSection] = useState(0);

  return (
    <Canvas shadows camera={{ position: [0, 8, 0], fov: 50 }}>
      <color attach="background" args={["#8960F2"]} />
      <ScrollControls pages={5} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} />
        <Experience section={section} />
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
