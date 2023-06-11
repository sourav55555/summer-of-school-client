import { Link } from 'react-router-dom';
import err from '../../assets/2463395.jpg';

const Error = () => {
    return (
        <div className='max-h-screen text-center pt-20'>
            <div className='text-center'>
            <img className='md:h-[33rem] h-[25rem] mx-auto' src={err} alt="" />
            </div>
            <div className="parent-btn mt-12">
                <Link
                    to="/"
                  type="submit"
                  className={` button3 text-black bg-[#ECF8F9]`}
                >
                  Home
                </Link>
              </div>
        </div>
    );
};

export default Error;