import Image from 'next/image';
import awsLogo from '../../public/aws-logo.png';
import newtabicon from '../../public/new-tab-icon.png';

import { GITHUB_URL } from '../../constants';

const ict_infra = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <div className="flex justify-center">
        <Image
          src={awsLogo}
          alt="Logo for AWS"
          width={100}
          height={60}
        />
      </div>
      <h3 className="text-lg font-bold pt-8 pb-2 ">
        ICT-infrastruktuuri pilvialustalla
      </h3>
      <p className="py-2">
        Kurssilla tutustuttiin AWS:n infrastruktuurin pystyttämiseen (VPC,
        aliverkot, muut resurssit) IaC-metodeilla sekä tarkasteltiin näitä
        asioita operoinnin, monistettavuuden ja ylläpidon näkökulmasta.{' '}
      </p>
      <a
        href={`${GITHUB_URL}/ict-infra-lopputyo`}
        target="blank"
        className="text-teal-600 inline-flex items-center gap-1"
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

export default ict_infra;
