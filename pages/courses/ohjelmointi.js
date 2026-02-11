import Image from 'next/image';
import JSLogo from '../../public/js-logo.png';

const ohjelmointi = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <div className="flex justify-center">
        <Image src={JSLogo} alt="Logo for JavaScript" width={100} height={100} />
      </div>
      <h3 className="text-lg font-bold pt-8 pb-2 ">Ohjelmointi 1 & 2</h3>
      <p className="py-2">
        Ohjelmointi 1 -kurssilla tutustuttiin ohjelmoinnin perusteisiin ja
        hyviin käytänteisiin JavaScript-ohjelmointikielellä.
      </p>
      <p>
        Ohjelmointi 2 -kurssi syvensi asioita TypeScript-ohjelmointikielen
        kautta.
      </p>
    </div>
  );
};

export default ohjelmointi;
