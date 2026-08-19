import HomePage from '@/pages/HomePage'

/*
  App.jsx — Root application component.
  
  Responsibilities:
  - Renders the current page (just HomePage for now)
  - Will later wrap with a Router and global providers (theme, auth, etc.)
    when needed in future stages
  
  Kept intentionally minimal at this stage.
*/
function App() {
  return <HomePage />
}

export default App
