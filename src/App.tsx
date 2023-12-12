
import './App.css'
import arrowPic from './assets/arrow.svg'
function App() {

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-neutral-950'>
      <h1 className='absolute top-2 left-5 text-3xl text-white'>300<span className='text-green-400'>saas</span></h1>
      <div className='flex flex-col gap-4 items-center'>
      <div className='flex flex-col items-center gap-2'>
      <h1 className='text-5xl text-shadow-md shadow-green-700 text-white'>Join our waitlist and</h1>
      <h1 className='text-5xl typing-demo text-white'>boost your saas visibility</h1>
    </div>
    <h2 className=' text-2xl mt-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-400'>You'll also get access to our weekly newsletter</h2>
    <div className='mt-8'>
    <h2 className='text-white ml-1'>Email:-</h2>
    <input type="text" className='border border-black w-96 rounded-md h-10 px-3 mt-3 bg-neutral-400 placeholder-black' placeholder='Enter your email' />

    </div>
    <img src={arrowPic} alt="" className='absolute right-60 top-40'/>
    <div className="flex items-center justify-center mt-3">
          <a href="#_" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-200"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Add me!</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
        </div>
      </div>
      
    </div>
    
  )
}

export default App
