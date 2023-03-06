import {Routes, Route} from 'react-router-dom';
import Private from './layout/Private';
import Explore from './pages/Explore'
import Login from './pages/Login';
import Register from './pages/Register';
import NotFoundPage from './pages/NotFoundPage';
import Dashboard from './pages/Dashboard';
import Showcase from './components/Showcase';
import Home from './pages/Home';
import CreateProfile from './pages/CreateProfile';
import Jobs from './pages/Jobs';
import MyJobs from './pages/MyJobs';
import AddProfile from './pages/AddProfile';
import EditProfileSocials from './pages/EditProfileSocials';
import AddExperience from './pages/AddExperience';
import AddEducation from './pages/AddEducation';
import ExperienceInfo from './pages/ExperienceInfo';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Private/>}>
          <Route path="/explore" element={<Explore/>}/>
          <Route path='/showcase' element= {<Showcase/>}/>
          <Route path='/' element= {<Home/>}/>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/jobs/:id" element={<ExperienceInfo/>}/>
        <Route path="/my-jobs" element={<MyJobs/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/register' element= {<Register/>}/>
        <Route path='/create-profile' element= {<CreateProfile/>}/>
        <Route path='/add-profile' element= {<AddProfile/>}/>
        <Route path='/add-education' element= {<AddEducation/>}/>
        <Route path='/add-experience' element= {<AddExperience/>}/>
        <Route path='/edit-profile/socials' element= {<EditProfileSocials/>}/>
        <Route path='*' element= {<NotFoundPage/>}/>
      </Routes>
    </div>
  )
}

export default App
