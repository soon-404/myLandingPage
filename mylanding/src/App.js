import Ig from "./logo/ig";
import Fb from "./logo/fb";
import Github from "./logo/github";
import Line from "./logo/line";
import Popline from "./components/PopLine";
import Profile from "./images/soon.jpg";
import { useState } from "react";
import useSound from "use-sound";
import test from "./Sounds/test.mp3";
function App() {
  const [linePop, setLinePop] = useState(false);
  const [play, { stop }] = useSound(test, { volume: 0.5 });
  return (
    <div className='flex h-screen w-screen flex-col justify-center items-center absolute inset-0'>
      <div
        className='flex h-screen w-screen flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-blue-400 to-green-400'
        onClick={stop}
      >
        <div className='my-8 md:my-14 w-40 md:w-300 h-40 md:h-300 rounded-full ring-4 md:ring-8 ring-white ring-offset-transparent bg-white'>
          <img className=' rounded-full' src={Profile} onClick={play}></img>
        </div>
        <text className='mb-4 md:mb-5 text-2xl smd:text-5xl lg:text-6xl font-mono text-gray-100'>
          Thanakorn Chancherngpanich
        </text>
        <text className='mb-4 md:mb-5 text-2xl smd:text-5xl lg:text-6xl font-mono text-gray-100'>
          [ Soon ]
        </text>
        <div className='w-screen flex flex-row justify-items-center justify-center space-x-5 md:space-x-10'>
          <div
            className='w-14 md:w-24 h-14 md:h-24 cursor-pointer'
            onClick={() => setLinePop(true)}
          >
            <Line />
          </div>

          <a
            href='https://www.instagram.com/_s00n__/'
            className='w-14 md:w-24 h-14 md:h-24'
          >
            <Ig />
          </a>

          <a
            href='https://github.com/soon-404'
            className='w-14 md:w-24 h-14 md:h-24'
          >
            <Github />
          </a>

          <a
            href='https://www.facebook.com/profile.php?id=100014669342473'
            className='w-14 md:w-24 h-14 md:h-24 '
          >
            <Fb />
          </a>
        </div>
      </div>
      <Popline trigger={linePop} setTrigger={setLinePop}></Popline>
    </div>
  );
}

export default App;
