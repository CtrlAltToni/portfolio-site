import Image from 'next/image';
import AngularLogo from '../../public/angular-logo.png';

const frontend_kehitys = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-2 dark:bg-white flex-1">
      <div className="flex justify-center">
        <Image
          src={AngularLogo}
          alt="Logo for Angular"
          width={100}
          height={100}
        />
      </div>
      <h3 className="text-lg font-bold pt-8 pb-2 ">Frontend-sovelluskehitys</h3>
      <p className="py-2">
        Kurssi syvensi frontend-kehityksen asioita Angular-sovelluskehyksen
        avulla.
      </p>
    </div>
  );
};

export default frontend_kehitys;
