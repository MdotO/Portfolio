import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './styles/theme'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import ProjectDetailPage from './components/ProjectDetailPage'
import ProjectsPage from './components/ProjectsPage'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  )
}

export default App
