import Image from 'next/image';
import pythonLogo from '../../public/python-logo.png';

const python_perusteet = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-2 dark:bg-white flex-1">
      <div className="flex justify-center">
        <Image
          src={pythonLogo}
          alt="Logo for Python"
          width={100}
          height={100}
        />
      </div>
      <h3 className="text-lg font-bold pt-8 pb-2 ">Python-ohjelmointi</h3>
      <p className="py-2">
        Kurssilla tutustuttiin olio-ohjelmointikielen perusasioihin Pythonilla.
      </p>
    </div>
  );
};

export default python_perusteet;
