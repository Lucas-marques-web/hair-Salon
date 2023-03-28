
import testimonialsImg from '../assets/testimonials1.png'
import testimonialsImg2 from '../assets/testimonials2.png'
import testimonialsImg3 from '../assets/testimonials3.png'

function Sixthpage() {
    return (
        <div className=" container sixthpage">
            <h2>Client Testimonials</h2>
            <hr style={{ width: '97.8%', marginLeft: '14px', marginTop: '15px', marginBottom: '40px' }}></hr>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={testimonialsImg} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <p className="card-text">"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.".</p>
                                <p>— Kian Graham</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <img src={testimonialsImg2} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <p className="card-text">"Boost your product and service's credibility by adding testimonials from your clients.<br></br>
                                    <br></br>
                                    People love recommendations so feedback from others who've tried it is invaluable".</p>
                                <p>— Celine Guajardo</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <img src={testimonialsImg3} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <p className="card-text">"Boost your product and service's credibility by adding testimonials from your clients. Feedback from others who've tried it is invaluable."</p>
                                <p>— Greg Martin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sixthpage;