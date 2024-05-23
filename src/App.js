import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sidebar from './components/Layout/Sidebar/Sidebar';
import Header from './components/Layout/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './redux/actions';
import { useEffect } from 'react';
import Teams from './pages/Teams/Teams';
import TopList from './pages/TopList/TopList';
import UpcomingCourses from './pages/UpcomingCourses/UpcomingCourses';

function App() {
  const data = useSelector((state)=>state.data);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div className="App ">
      <Sidebar/>
      <div className="content">
        <Header data={data}/>
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/teams" element={<Teams data={data}/>} />
        <Route path="/topList" element={<TopList data={data}/>} />
        <Route path="/upcomingCourses" element={<UpcomingCourses data={data}/>} />
      </Routes>
  </div>
    </div>
  );
}


export default App;
