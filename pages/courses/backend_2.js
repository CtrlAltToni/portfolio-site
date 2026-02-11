import Image from 'next/image';
import serverlessLogo from '../../public/serverless-logo.png';
import newtabicon from '../../public/new-tab-icon.png';

import { GITHUB_URL } from '../../constants';

const backend_2 = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <div className="flex justify-center">
        <Image
          src={serverlessLogo}
          alt="Logo for Serverless Framework"
          width={100}
          height={100}
        />
      </div>
      <h3 className="text-lg font-bold pt-8 pb-2 ">
        Backend-sovelluskehitys 2
      </h3>
      <p className="py-2">
        Kursilla keskityttiin backendin rakentamiseen serverless-teknologioilla
        pilvialustojen päälle.
      </p>
      <a
        href={`${GITHUB_URL}/sst-framework-demo`}
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

export default backend_2;
