import Button from '../../components/Button/Button.jsx'
import './HomePage.css'

function HomePage() {
  return (
    <div className="hero-banner py-24">
      <div className="container md:flex items-center justify-between">
        <div className="hero-banner__content flex flex-col gap-32">
          <h1 className="content__title">Navigating the digital landscape for success</h1>
          <p className="content__description">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <Button 
            text="Book a consultation"
            variant="primary"
            to="http://google.com"
          />
        </div>
        <div className="hero-banner__image">
          <img src="../../../public/hero-banner-illustration.svg" alt="Hero Banner Image" />
        </div>
      </div>
    </div>
  )
}

export default HomePage