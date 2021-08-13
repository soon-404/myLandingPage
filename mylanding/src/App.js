import Ig from "./logo/ig";
import Fb from "./logo/fb";
import Github from "./logo/github";
function App() {
  return (
    <div className='flex h-screen w-screen flex-col justify-center items-center bg-yellow-400'>
      <div className='my-20 w-40 md:w-100 h-40 md:h-100 rounded-full ring-4 md:ring-8 ring-blue-500 ring-offset-transparent bg-white'></div>
      <text className='text-2xl smd:text-5xl lg:text-6xl font-mono'>
        Thanakorn Chancherngpanich
      </text>
      <div className='w-screen flex flex-row justify-items-center justify-center space-x-5 md:space-x-10'>
        <a
          href='https://www.facebook.com/profile.php?id=100014669342473'
          className='w-14 md:w-24 h-14 md:h-24 '
        >
          <Fb></Fb>
        </a>

        <a
          href='https://www.instagram.com/_s00n__/'
          className='w-14 md:w-24 h-14 md:h-24'
        >
          <Ig></Ig>
        </a>

        <a
          href='https://github.com/soon-404'
          className='w-14 md:w-24 h-14 md:h-24'
        >
          <Github></Github>
        </a>
      </div>
    </div>
  );
}

export default App;
