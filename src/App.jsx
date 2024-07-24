import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
<link href="./output.css" rel="stylesheet"></link>;

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={5} damping={0.1}>
        <Experience />
        <Scroll html>
          <h1 class="text-3xl font-bold underline col-span-1 to-sky-600">
            Culture Connection!
          </h1>
          ;
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
