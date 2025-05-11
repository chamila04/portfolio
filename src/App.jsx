import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SkeletonLoader from "./components/SkeletonLoader";
import Loading from "./components/Loading";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));

function App() {
  // State to track if initial load is complete
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          {/* Render Navbar only after initial load is complete */}
          {initialLoadComplete && <Navbar />}
          <main>
            <Suspense fallback={<Loading />}>
              <Routes>
                {/* Pass callback to Home to signal load completion */}
                <Route
                  path="/"
                  element={<Home onLoadComplete={() => setInitialLoadComplete(true)} />}
                />
                <Route
                  path="/project/:id"
                  element={
                    <Suspense fallback={<SkeletonLoader type="project-detail" />}>
                      <ProjectDetail />
                    </Suspense>
                  }
                />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;