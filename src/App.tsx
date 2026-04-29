import BackgroundShaders from "./components/ui/background-shaders"
import ShaderBackground from "./components/ui/shader-background"
import DemoOne from "./components/ui/demo"

function App() {
  const params = new URLSearchParams(window.location.search)
  const bg = params.get('bg')
  
  if (bg === 'plasma') {
    return <ShaderBackground />
  }
  
  if (bg === 'stripe') {
    return <DemoOne />
  }
  
  return <BackgroundShaders />
}

export default App