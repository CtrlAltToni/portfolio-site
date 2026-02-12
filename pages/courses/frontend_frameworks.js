import Image from 'next/image';
import FrontendLogo from '../../public/frontend-logo.png';

const FrontendFrameworks = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-2 dark:bg-white flex-1">
      <div className="flex justify-center">
        <Image
          src={FrontendLogo}
          alt="Logo for frontend frameworks"
          width={100}
          height={101}
        />
      </div>
      <h3 className="text-lg font-bold pt-8 pb-2 ">Frontend-frameworks</h3>
      <p className="py-2">
        Svelte-kurssi toimi johdantona moderniin frontend-sovelluskehitykseen.
        Angular ja React -kurssit syvensivät asioita frontend-kehityksen parissa.
      </p>
    </div>
  );
};

export default FrontendFrameworks;