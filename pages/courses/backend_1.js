import Image from 'next/image';
import restapiLogo from '/public/restapi-logo.png';
import newtabicon from '/public/new-tab-icon.png';

import { GITHUB_URL } from '../../constants';

const backend_1 = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <Image
        src={restapiLogo}
        alt="Logo for RESTAPI"
        width={100}
        height={100}
      />
      <h3 className="text-lg font-bold pt-8 pb-2 ">
        Backend-sovelluskehitys 1
      </h3>
      <p className="py-2">
        Kursilla tutustuttiin backend-sovellusten toimintatapoihin sekä
        kehitettiin moderneja backend-sovelluksia NodeJS:llä,
        Express-sovelluskehyksellä ja WebSocketilla.
      </p>
      <a
        href={`${GITHUB_URL}/backend-1-lopputyo`}
        target="blank"
        className="text-teal-600"
      >
        Kurssin lopputyön GH-repositorio
        <Image
          src={newtabicon}
          alt="Icon for indicating that link opens in a new tab"
          width={15}
          height={15}
        />
      </a>
    </div>
  );
};

export default backend_1;
