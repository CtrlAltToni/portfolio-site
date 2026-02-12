import Image from 'next/image';
import newtabicon from '../public/new-tab-icon.png';

const CourseCard = ({ 
  title, 
  description, 
  logo,
  logoWidth = 100,
  logoHeight = 100,
  link,
  linkText = 'Kurssin lopputyön GH-repositorio',
  isSpecial = false,
  institution = 'JAMK'
}) => {
  const institutionLogo = institution === 'TUNI' ? '/tuni-logo.png' : '/jamk-logo.png';
  
  return (
    <div className={`text-center shadow-lg p-10 rounded-xl my-2 dark:bg-white relative ${isSpecial ? 'flex-2' : 'flex-1'}`}>
      <div className="absolute top-3 right-3">
        <Image
          src={institutionLogo}
          alt={`${institution} logo`}
          width={45}
          height={45}
        />
      </div>
      <div className="flex justify-center">
        <Image
          src={logo}
          alt={title}
          width={logoWidth}
          height={logoHeight}
        />
      </div>
      <h3 className="text-lg font-bold pt-8 pb-2">{title}</h3>
      <div className="py-2">
        {Array.isArray(description) ? (
          description.map((desc, idx) => <p key={idx}>{desc}</p>)
        ) : (
          <p>{description}</p>
        )}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 inline-flex items-center gap-1"
        >
          {linkText}
          <Image
            src={newtabicon}
            alt="Icon for indicating that link opens in a new tab"
            width={15}
            height={15}
          />
        </a>
      )}
    </div>
  );
};

export default CourseCard;
