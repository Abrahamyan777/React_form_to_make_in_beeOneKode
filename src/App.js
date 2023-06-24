import './App.css';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Registration from './component/Sign/registration';
import { useDispatch, useSelector } from 'react-redux';
import { getItemAC } from './store/actions/actionsCreators';
import { useEffect } from 'react';



function App() {

  const { users } = useSelector(state => state.usersReducer)

  const dispatch = useDispatch()

  useEffect(()=> {
    const data = localStorage.getItem("text")
    const d = JSON.parse(data)
    dispatch(getItemAC(d))
    
  },[])



  return (
    <div className="App">
      {
        localStorage.getItem("token") ? 
        <> 
          <Header />
          <Main  users={users} />
        </>
        : 
        <Registration users={users}/>
      }
      
    </div>
  );
}

export default App;
