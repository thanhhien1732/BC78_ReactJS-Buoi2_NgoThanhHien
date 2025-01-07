import { useState } from 'react'
import GlassModel from "./glass-model"
import GlassList from "./glass-list"

export default function GlassApp() {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  return (
    <div>
      <header className="header text-center text-white py-5 text-2xl font-bold uppercase relative">GLASSES APP ONLINE</header>
      <div className="container mx-auto p-5">
        <GlassModel selectedGlasses={selectedGlasses} />
        <GlassList onSelect={(glasses) => setSelectedGlasses(glasses)} />
      </div>
    </div>
  );
}