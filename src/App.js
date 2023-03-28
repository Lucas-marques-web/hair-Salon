
import Firstpage from './components/Firstpage';
import Secondpage from './components/Secondpage';
import Thirdpage from './components/Thirdpage';
import Fourthpage from './components/Fourthpage';
import Fifthpage from './components/Fifthpage';
import Sixthpage from './components/Sixthpage';
import Seventhpage from './components/Seventhpage'
import Eighthpage from './components/Eighthpage';

function App() {
  return (
    <div>
      <Firstpage />
      <Secondpage />
      <h3 style={{position:'relative',top:'30px',textAlign:'center',fontSize:'25px',paddingTop:'20px'}}>OUR SERVICES</h3>
      <hr style={{color:'black',height:'1px',backgroundColor:'black',marginBottom:'30px',width:'90%',marginLeft:'60px'}}/>
      <Thirdpage />
      <Fourthpage />
      <Fifthpage />
      <Sixthpage />
      <Seventhpage />
      <Eighthpage />
    </div>
  );
}

export default App;
