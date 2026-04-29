import BackgroundShaders from "./components/ui/background-shaders"
import ShaderBackground from "./components/ui/shader-background"
import Day6Places from "./components/ui/day6-places"

function App() {
  const params = new URLSearchParams(window.location.search)
  const bg = params.get('bg')
  const view = params.get('view')
  
  if (view === 'places') {
    return <Day6Places />
  }
  
  if (bg === 'plasma') {
    return <ShaderBackground />
  }
  
  return <BackgroundShaders />
}

export default App