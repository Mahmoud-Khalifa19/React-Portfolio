import React from 'react'
import clothes from '../assets/clothes.png';
import nyt from '../assets/nyt.png';
import faceapi from '../assets/faceapi.png'

const Experience = () => {
  return (
    <div name='experience' className='w-full md: h-screen text-gray-300 bg-[#60A5FA]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600'>
            Experience
          </p>
          <p className='py-6'>Please check out some of my work below.</p>
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/*Project 1 */}  
          <div
            style={{ backgroundImage: `url(${nyt})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
          
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                NYT Instanews
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mahmoud-khalifa19.github.io/nyt-Instanews/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a href='https://github.com/Mahmoud-Khalifa19/nyt-Instanews.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
            style={{ backgroundImage: `url(${clothes})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
          
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Crwn clothing
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mahmoud-khalifa19.github.io/crwn-clothing/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a href='https://github.com/Mahmoud-Khalifa19/crwn-clothing.git'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          {/*Project 3 */}
          <div
            style={{ backgroundImage: `url(${faceapi})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Facial Recognition API
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          
  );
};

export default Experience