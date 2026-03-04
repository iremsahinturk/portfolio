import { lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Header from './common/layout/Header'

const MaviProject = lazy(() => import('@/pages/works/mavi/MaviProject.tsx'))
const Home = lazy(() => import('@/pages/home/Home.tsx'))
const About = lazy(() => import('@/pages/about/About.tsx'))

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/works">
          <Route path="mavi-project" element={<MaviProject />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
