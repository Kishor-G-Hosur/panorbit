import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Comp1 from './component/comp1'
import Comp2 from './component/comp2';
import Comp3 from './component/comp3';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Comp1/>}/>
      <Route path='/users/:id' element={<Comp2/>}/>
      <Route path='/users/coming-soon' element={<Comp3/>}/>
    </Routes>
    
    </BrowserRouter>
  
   
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={UserList} />
//         <Route path="/users/:id" component={UserProfile} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
