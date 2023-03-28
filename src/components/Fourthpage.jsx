
import Services from "./Services";
import img4 from '../assets/services4.png';
import img5 from '../assets/services5.png'
import img6 from '../assets/services6.png'


function Fourthpage(){
    return(
        <div className="container-fluid thirdpage">
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <Services img={img4} type='TREATMENTS' service='Hair Spa' price='starts at $60' />
                </div>
                <div className="col">
                    <Services img={img5} type='TREATMENTS' service='Keratin Treatment' price='starts at $70' />
                </div>
                <div className="col">
                    <Services img={img6} type='TREATMENTS' service='Deep Conditioning' price='starts at $90' />
                </div>
            </div>

        </div>
        
    </div>
    )
}

export default Fourthpage;