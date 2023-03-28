
import firstpageimg from '../assets/bgImgFirstpage.png'

function Firstpage(){
    return(
            <div className="firstpage" style={{ 
                backgroundImage: `url(${firstpageimg})`}}>
                <h3 style={{position:'relative',top:'20px',textDecorationLine:'underline',font:'25px'}}>Luckz</h3>
                <hr className='whiteHr'></hr>
                <div className='container-fluid firstpagegroup'>
                    <h1>LETTING YOUR</h1>
                    <h1>TRUE BEAUTY SHINE</h1>
                    <h3>Experience world-class hair and beauty services</h3>
                    <button className='firstpagebtn' onMouseOver={()=>{
                        document.querySelector('.firstpagebtn').classList.add("hoverbtn")
                    }} onMouseOut={()=>{
                        document.querySelector('.firstpagebtn').classList.remove("hoverbtn")
                    }}>BOOK AN APPOINTMENT</button>
                </div>
                
                
            </div>
                
    )
}

export default Firstpage;