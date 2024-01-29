import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import arrow1 from "/Users/frankjr./Desktop/React APP portfolio site/my-app/src/assets/img/arrow1.svg";
import arrow2 from "/Users/frankjr./Desktop/React APP portfolio site/my-app/src/assets/img/arrow2.svg";
import html5 from "../assets/img/icons8-html-5.svg"
import css from "../assets/img/icons8-css.svg";
import javaScript from "../assets/img/icons8-javascript.svg";
import python from "../assets/img/icons8-python.svg";
import django from "../assets/img/icons8-django.svg";
import postgre from "../assets/img/icons8-postgresql.svg";
import git from "../assets/img/icons8-git.svg";
import github from "../assets/img/icons8-github.svg";
import boot from "../assets/img/icons8-bootstrap.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            //the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: { 
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
        
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={html5} alt="Image1" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image1" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={javaScript} alt="Image1" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="Image1" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={django} alt="Image1" />
                                    <h5>Django</h5>
                                </div>
                                <div className="item">
                                    <img src={postgre} alt="Image1" />
                                    <h5>Postgre SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="Image1" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={github} alt="Image1" />
                                    <h5>Github</h5>
                                </div>
                                <div className="item">
                                    <img src={boot} alt="Image1" />
                                    <h5>Bootstrap</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}