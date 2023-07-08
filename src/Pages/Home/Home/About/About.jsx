import about from '../../../../assets/newIcon/sport-35478.png';
import abouttxt from '../../../../assets/newIcon/PngItem_202688.png';
import "./About.css"

const About = () => {
    return (
        <div className=" pb-28 pt-28 text-center px-6">
            <h2 className="font1 text-4xl font-bold mb-16 mx-auto">About Us</h2>
            <div className="flex md:flex-row flex-col justify-center items-center gap-20">
                <div className="md:w-1/2">
                    <img className='ms-auto' src={about} alt="" />
                </div>
                <div className="md:w-1/2 ">
                    <div className="md:w-3/4  dark:bg-[#854dff] bg-[#f6dfb8] text-[1.1rem] py-12 px-3 md:px-12 about">
                        <img className='h-10 mx-auto mb-4' src={abouttxt} alt="" />
                        <p>
                        Welcome to "Summer of Sports" School! We believe in the transformative power of sports. Our exceptional summer camp programs empower children to unleash their athletic potential, develop lifelong skills, and create unforgettable memories. With a focus on fun, skill development, and teamwork, our diverse range of sports activities caters to every child's interests and abilities. Join us for an incredible summer of growth, friendship, and endless fun at "Summer of Sports" School!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;