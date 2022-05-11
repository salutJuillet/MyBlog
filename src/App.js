import TopBar from './comp/topbar/TopBar';
import Home from './pages/home/Home';
import About from './pages/About';
import List from './pages/List';
import Detail from './pages/details/Detail';
import Write from './pages/form/Write';
import Settings from './pages/settings/Settings';
import LogIn from './pages/login/LogIn';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false; /* 로그인이 안된 상태로 선언 */
  return (
    <BrowserRouter>
      <TopBar />

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/list/*" element={<List />} />
        <Route path="/detail/*" element={<Detail />} />
        <Route path="/write/*" element={<Write />} />
        {/* <Route path="/write/*" element={(user=='juillet') ? <Write /> : <Home />} /> */}
        <Route path="/settings/*" element={user ? <Home /> : <Settings />} />
        <Route path="/login/*" element={user ? <Home /> : <LogIn />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
