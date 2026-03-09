import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const Model = ({ url }) => {
  const geom = useLoader(STLLoader, url);
  return (
    <mesh geometry={geom}>
      <meshStandardMaterial 
        color="#06b6d4" 
        metalness={0.8} 
        roughness={0.2} 
        emissive="#06b6d4" 
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const ModelViewer = ({ modelUrl, title }) => {
  if (!modelUrl) return null;

  return (
    <div className="model-viewer-container glass-panel">
      <div className="model-viewer-header">
        <h4>Interactive 3D Preview: {title}</h4>
        <p className="text-sm text-slate-400">Drag to rotate • Scroll to zoom</p>
      </div>
      <div className="canvas-wrapper" style={{ height: '400px', width: '100%', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', overflow: 'hidden' }}>
        <Canvas shadows>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.5} contactShadow={false}>
              <Model url={modelUrl} />
            </Stage>
          </Suspense>
          <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </div>
  );
};

export default ModelViewer;
