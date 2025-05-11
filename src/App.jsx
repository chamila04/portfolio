import { lazy, Suspense } from "react";
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
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/project/:id"
                  element={
                      <Suspense
                        fallback={<SkeletonLoader type="project-detail" />}
                      >
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
