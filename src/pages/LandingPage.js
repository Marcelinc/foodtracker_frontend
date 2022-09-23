import Navigation from "../components/Navigation"
import '../styles/LandingPage.css'
import DOWNLOAD_BUTTON from '../resource/img/en_badge_web_generic.png'

function LandingPage() {
  return (
    <div className="container">
        <Navigation/>
        <main className="landingPage">
            <section className="landing-one">
                <div className="text-one">
                    <h2>Utwórz grupę i zamiawiaj jedzenie</h2>
                    <p>Za darmo</p>
                </div>
                <div className="aside-one">
                    <div className="image-one">Image</div>
                </div>
            </section>
            <section className="landing-two">
                <div className="point">
                    <div className="point-image"><div>IMG</div></div>
                    <div className="point-content">
                        <p className="point-numb">01</p>
                        <h3 className="point-title">Title One</h3>
                        <p className="point-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="point">
                    <div className="point-content">
                        <p className="point-numb">02</p>
                        <h3 className="point-title">Title Two</h3>
                        <p className="point-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                    <div className="point-image"><div>IMG</div></div>
                </div>
            </section>
            <section className="landing-three">
                <h2 className="counters-header">Title Section Three</h2>
                <div className="counters">
                    <p className="counter"><span className="counter-numb">96</span> <span className="counter-description">Użytkowicy</span></p>
                    <p className="counter"><span className="counter-numb">429</span> <span className="counter-description">Zrealizowane zamówienia</span></p>
                </div>
            </section>
            <section className="landing-four">
                <div className="point-image"><div>IMG</div></div>
                <div className="point-content">
                    <p className="point-numb">03</p>
                    <h3 className="point-title">Title Three</h3>
                    <p className="point-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </section>
            <section className="landing-four">
                <div className="five-content">
                    <h3 className="five-header">Title Five</h3>
                    <p className="five-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="five-image">IMG</div>
                </div>
                <div className="five-image"><div className="point-image">IMG</div></div>
            </section>
            <section className="landing-six">
                <h2 className="landing-header">Download the app</h2>
                <p className="point-text">
                    In vitae velit luctus, imperdiet augue et, elementum dui. Sed sit amet nisi nulla. In ut diam id lectus 
                    efficitur efficitur quis vitae felis. Suspendisse euismod leo sapien, sit amet accumsan quam fermentum nec. 
                </p>
                <img src={DOWNLOAD_BUTTON} alt='GET FROM GOOGLE PLAY' className="download-button"></img>
            </section>
        </main>
    </div>
  )
}

export default LandingPage