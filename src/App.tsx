import { lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Header from './common/layout/Header'

const Home = lazy(() => import('@/pages/home/Home.tsx'))
const About = lazy(() => import('@/pages/about/About.tsx'))
const MaviProject = lazy(() => import('@/pages/works/mavi/MaviProject.tsx'))
const VodafoneProject = lazy(() => import('@/pages/works/vodafone/VodafoneProject.tsx'))
const VakifbankProject = lazy(() => import('@/pages/works/vakifbank/VakifbankProject.tsx'))

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
          <Route path="vodafone-project" element={<VodafoneProject />} />
          <Route path="vakifbank-project" element={<VakifbankProject />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
