import Services from "./Services";
import img from '../assets/services1.png';
import img2 from '../assets/services2.png'
import img3 from '../assets/services3.png'


function Thirdpage() {
    return (
        <div className="container-fluid thirdpage">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <Services img={img} type='HAIRCARE' service='Haircut and Styling' price='starts at $45' />
                    </div>
                    <div className="col">
                        <Services img={img2} type='HAIRCARE' service='Color and Highlights' price='starts at $70' />
                    </div>
                    <div className="col">
                        <Services img={img3} type='HAIRCARE' service='Perm / Straightening' price='starts at $80' />
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Thirdpage;