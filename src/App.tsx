import { lazy, useEffect } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router'
import Header from './common/layout/Header'
import PasswordProtection from './common/components/PasswordProtection'

const Work = lazy(() => import('@/pages/work/Work'))
const About = lazy(() => import('@/pages/about/About.tsx'))
const Resume = lazy(() => import('@/pages/resume/Resume.tsx'))
const MaviProject = lazy(() => import('@/pages/projects/mavi/MaviProject'))
const VodafoneProject = lazy(() => import('@/pages/projects/vodafone/VodafoneProject'))
const VakifbankProject = lazy(() => import('@/pages/projects/vakifbank/VakifbankProject'))

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <PasswordProtection>
      <Routes>
        <Route element={<Header />}>
          <Route path="/work" element={<Outlet />}>
            <Route index element={<Work />} />
            <Route path="mavi-project" element={<MaviProject />} />
            <Route path="vodafone-project" element={<VodafoneProject />} />
            <Route path="vakifbank-project" element={<VakifbankProject />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/work" replace />} />
        </Route>
      </Routes>
    </PasswordProtection>
  );
}
