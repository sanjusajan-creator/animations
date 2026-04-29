import BackgroundShaders from "./components/ui/background-shaders"
import ShaderBackground from "./components/ui/shader-background"

function App() {
  const params = new URLSearchParams(window.location.search)
  const bg = params.get('bg')
  
  if (bg === 'plasma') {
    return <ShaderBackground />
  }
  
  return <BackgroundShaders />
}

export default App