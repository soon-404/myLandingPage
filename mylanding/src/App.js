import Ig from "./logo/ig";
import Fb from "./logo/fb";
import Github from "./logo/github";
import Line from "./logo/line";
import Popline from "./components/PopLine";
import { useState } from "react";
function App() {
  const [linePop, setLinePop] = useState(false);

  return (
    <div className='flex h-screen w-screen flex-col justify-center items-center bg-yellow-400'>
      <main className='flex h-screen w-screen flex-col justify-center items-center bg-yellow-400'>
        <div className='my-8 md:my-14 w-40 md:w-300 h-40 md:h-300 rounded-full ring-4 md:ring-8 ring-blue-500 ring-offset-transparent bg-white'></div>
        <text className='mb-4 md:mb-5 text-2xl smd:text-5xl lg:text-6xl font-mono'>
          Thanakorn Chancherngpanich
        </text>
        <div className='w-screen flex flex-row justify-items-center justify-center space-x-5 md:space-x-10'>
          <a
            href='https://www.facebook.com/profile.php?id=100014669342473'
            className='w-14 md:w-24 h-14 md:h-24 '
          >
            <Fb />
          </a>

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

          <div
            className='w-14 md:w-24 h-14 md:h-24 cursor-pointer'
            onClick={() => setLinePop(true)}
          >
            <Line />
          </div>
        </div>
      </main>
      <Popline trigger={linePop} setTrigger={setLinePop}></Popline>
    </div>
  );
}

export default App;
