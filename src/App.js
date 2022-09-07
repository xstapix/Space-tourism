import {useRef, useState} from 'react'

import logo from "./shared/logo.svg"
import hamburger from "./shared/icon-hamburger.svg"
import close from "./shared/icon-close.svg"
import DB from './data.json'
import './App.css'
import './MediaApp.css'

import Carousel from './Carousel/Carousel';

function App() {
  const destinations = useRef(null)
  const crew = useRef(null)
  const technology = useRef(null)
  const home = useRef(null)

  const [crewOffset, setCrewOffset] = useState()
  const [techOffset, setTechOffset] = useState()
  const [destinationOffset, setDestinationOffset] = useState()
  const [isOpen, setIsOpen] = useState('')

  const scrollToLink = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const handleDestinations = (event) => {
    switch (event.target.id) {
      case "moon":
        event.target.classList.add('activePlanet')
        document.getElementById("mars").classList.remove('activePlanet')
        document.getElementById("europa").classList.remove('activePlanet')
        document.getElementById("titan").classList.remove('activePlanet')
        setDestinationOffset(0)
        break;
      case "mars":
        event.target.classList.add('activePlanet')
        document.getElementById("moon").classList.remove('activePlanet')
        document.getElementById("europa").classList.remove('activePlanet')
        document.getElementById("titan").classList.remove('activePlanet')
        
        if(window.screen.width <= 428){
          setDestinationOffset(-window.screen.width + 48)
        } else {
          setDestinationOffset(-1100)
        }
        break;
      case "europa":
        event.target.classList.add('activePlanet')
        document.getElementById("moon").classList.remove('activePlanet')
        document.getElementById("mars").classList.remove('activePlanet')
        document.getElementById("titan").classList.remove('activePlanet')
        
        if(window.screen.width <= 428){
          setDestinationOffset(-window.screen.width + 48 - (window.screen.width - 48))
        } else {
          setDestinationOffset(-2200)
        }
        break;
      case "titan":
        event.target.classList.add('activePlanet')
        document.getElementById("moon").classList.remove('activePlanet')
        document.getElementById("mars").classList.remove('activePlanet')
        document.getElementById("europa").classList.remove('activePlanet')
        
        if(window.screen.width <= 428){
          setDestinationOffset(-window.screen.width + 48 -(2 * window.screen.width - 96))
        } else {

          setDestinationOffset(-3300)
        }
        break;
    
      default:
        break;
    }
  }
  
  const handleDots = (event) => {
    switch (event.target.id) {
      case '0':
        event.target.classList.add('activeDot')
        document.getElementById("1").classList.remove('activeDot')
        document.getElementById("2").classList.remove('activeDot')
        document.getElementById("3").classList.remove('activeDot')
        setCrewOffset(0)
        break;
      case '1':
        event.target.classList.add('activeDot')
        document.getElementById("0").classList.remove('activeDot')
        document.getElementById("2").classList.remove('activeDot')
        document.getElementById("3").classList.remove('activeDot')
        if(window.screen.width <= 428){
          setCrewOffset(-window.screen.width + 48)
        } else {
          setCrewOffset(-1100)
        }
        break;
      case '2':
        event.target.classList.add('activeDot')
        document.getElementById("0").classList.remove('activeDot')
        document.getElementById("1").classList.remove('activeDot')
        document.getElementById("3").classList.remove('activeDot')
        
        if(window.screen.width <= 428){
          setCrewOffset(-window.screen.width + 48 - (window.screen.width - 48))
        } else {
          setCrewOffset(-2200)
        }
        break;
      case '3':
        event.target.classList.add('activeDot')
        document.getElementById("0").classList.remove('activeDot')
        document.getElementById("2").classList.remove('activeDot')
        document.getElementById("1").classList.remove('activeDot')
        if(window.screen.width <= 428){
          setCrewOffset(-window.screen.width + 48 - (2 * window.screen.width - 96))
        } else {
          setCrewOffset(-3300)
        }
        break;
    
      default:
        break;
    }
  }

  const handleCircle = (event) => {
    switch (event.target.id) {
      case 'Circle1':
        event.target.classList.add('activeCircle')
        document.getElementById("Circle2").classList.remove('activeCircle')
        document.getElementById("Circle3").classList.remove('activeCircle')
        setTechOffset(0)
        break;
      case 'Circle2':
        event.target.classList.add('activeCircle')
        document.getElementById("Circle1").classList.remove('activeCircle')
        document.getElementById("Circle3").classList.remove('activeCircle')
        if(window.screen.width <= 428){
          setTechOffset(-window.screen.width + 48)
        } else {
          setTechOffset(-1100)
        }
        break;
      case 'Circle3':
        event.target.classList.add('activeCircle')
        document.getElementById("Circle1").classList.remove('activeCircle')
        document.getElementById("Circle2").classList.remove('activeCircle')
        if(window.screen.width <= 428){
          setTechOffset(- window.screen.width + 48- (window.screen.width - 48))
        } else {
          setTechOffset(-2200)
        }
        break;
    
      default:
        break;
    }
  }

  window.addEventListener('scroll', () => {
    if(window.pageYOffset < 440){
      document.getElementById("homelink").classList.add('active')
      document.getElementById("crew-link").classList.remove('active')
      document.getElementById("tech-link").classList.remove('active')
      document.getElementById("des-link").classList.remove('active')
    }
    if(window.pageYOffset > 440){
      document.getElementById("homelink").classList.remove('active')
      document.getElementById("crew-link").classList.remove('active')
      document.getElementById("tech-link").classList.remove('active')
      document.getElementById("des-link").classList.add('active')
    }
    if(window.pageYOffset > 1280){
      document.getElementById("homelink").classList.remove('active')
      document.getElementById("crew-link").classList.add('active')
      document.getElementById("tech-link").classList.remove('active')
      document.getElementById("des-link").classList.remove('active')
    }
    if(window.pageYOffset > 2200){
      document.getElementById("homelink").classList.remove('active')
      document.getElementById("crew-link").classList.remove('active')
      document.getElementById("tech-link").classList.add('active')
      document.getElementById("des-link").classList.remove('active')
    }
  });

  return (
    <div className="App">
      <header>
        <div className="container_header">
          <img 
            src={logo} 
            className="logo" 
            onClick={() => scrollToLink(home)}/>
          <img 
            src={hamburger} 
            className='hamburger'
            onClick={() => setIsOpen('activeNav')}/>
          <div className="line"></div>
          <nav className={`${isOpen}`}>
            <img 
              src={close} 
              className='close'
              onClick={() => setIsOpen('')}/>
            <ul>
              <li onClick={() => scrollToLink(home)} className='active' id='homelink'><span>00</span>HOME</li>
              <li onClick={() => scrollToLink(destinations)} className="" id='des-link'><span>01</span>DESTINATION</li>
              <li onClick={() => scrollToLink(crew)} className="" id='crew-link'><span>02</span>CREW</li>
              <li onClick={() => scrollToLink(technology)} className="" id='tech-link'><span>03</span>TECHNOLOGY</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="background-home" ref={home} onClick={() => setIsOpen('')}>
        <main className="main-container">
          <section className="home"> 
            <div>
              <p className="text">SO, YOU WANT TO TRAVEL TO</p>
              <article>
                <span>SPACE</span>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
              </article>
            </div>
            <div className="explore" onClick={() => scrollToLink(destinations)}>EXPLORE</div>
          </section>
        </main>
      </div>
      <div className="background-destinations" ref={destinations} onClick={() => setIsOpen('')}>
        <main className="main-container">
          <p className="pickYour"><span>01</span>Pick your destination</p>
          <ul className="planets-list">
            <li onClick={handleDestinations} className="activePlanet" id="moon">MOON</li>
            <li onClick={handleDestinations} id="mars">MARS</li>
            <li onClick={handleDestinations} id="europa">EUROPA</li>
            <li onClick={handleDestinations} id="titan">TITAN</li>
          </ul>
          <Carousel activeSlide={destinationOffset}>
          {DB.destinations.map(item => (
            <section className="flex" key={item.name}>
              <img src={item.images.png} className="planetIMG"/>
              <div>
                <section className="planet">
                  <div>
                    <article>
                      <span>{item.name}</span>
                      <p>{item.description}</p>
                    </article>
                    <div className="line_under-planet"></div>
                    <section className="planet-info">
                      <div>
                        <span>AVG. DISTANCE</span>
                        <p className="km">{item.distance}</p>
                      </div>
                      <div>
                        <span>Est. travel time</span>
                        <p className="km">{item.travel}</p>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
            </section>
          ))}
          </Carousel>
        </main>
      </div>
      <div className="background-crew" ref={crew} onClick={() => setIsOpen('')}>
        <main className="main-container">
          <p className="pickYour"><span>02</span>Meet your crew</p>
          <Carousel activeSlide={crewOffset}>
            {DB.crew.map(item => (
              <section className="flex" key={item.role}>
                <div className='line-team'></div>
                <section className="team">
                  <p className="job">{item.role}</p>
                  <article>
                    <div>{item.name}</div>
                    <p>{item.bio}</p>
                  </article>
                </section>
                <img src={item.images.webp} className="peopleIMG"/>
              </section>
            ))}
          </Carousel>
          <div className='dots'>
            <div className='dot activeDot' id='0' onClick={handleDots}></div>
            <div className='dot' id='1' onClick={handleDots}></div>
            <div className='dot' id='2' onClick={handleDots}></div>
            <div className='dot' id='3' onClick={handleDots}></div>
          </div>
        </main>
      </div>
      <div className="background-technology" ref={technology}>
        <main className="technology-container">
          <p className="pickYour technology-margin"><span>03</span>SPACE LAUNCH 101</p>
          <Carousel activeSlide={techOffset}>
          {DB.technology.map(item => (
            <section className="flex" key={item.name}>
              <section className="team tech-mobile">
                <p className="just_technology">THE TERMINOLOGY…</p>
                <article>
                  <div>{item.name}</div>
                  <p>{item.description}</p>
                </article>
              </section>
              <picture>
                <source  srcSet={item.images.landscape} media='(max-width: 429px)'/>
                <img className='landscape' src={item.images.portrait}/>
              </picture>
            </section>
          ))}
          </Carousel>
          <div className='slider'>
            <div className='circle activeCircle' id='Circle1' onClick={handleCircle}>1</div>
            <div className='circle' id='Circle2' onClick={handleCircle}>2</div>
            <div className='circle' id='Circle3' onClick={handleCircle}>3</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
