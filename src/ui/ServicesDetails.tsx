import { Button } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { GiCheckMark } from 'react-icons/gi';

interface ServiceDetailsProps {
  no: string;
  title: string;
  startingAmt?: string;
  detailsOne?: string;
  detailsTwo?: string;
  detailsThree?: string;
  detailsFour?: string;
  detailsFive?: string;
  imageUrl: string;
}

const ServicesDetails: React.FC<ServiceDetailsProps> = ({
  no,
  title,
  startingAmt,
  detailsOne,
  detailsTwo,
  detailsThree,
  detailsFour,
  detailsFive,
  imageUrl,
}) => {
  const router = useRouter();

  const handleOrder = () => {
    const queryParams = new URLSearchParams({
      title: title || '',
      startingAmt: startingAmt || '',
      detailsOne: detailsOne || '',
      detailsTwo: detailsTwo || '',
      detailsThree: detailsThree || '',
      detailsFour: detailsFour || '',
      detailsFive: detailsFive || '',
      imageUrl: imageUrl || ''
    }).toString();
  
    router.push(`/payment?${queryParams}`);
  };

  return (
    <div className="flex flex-col gap-8 border border-borderColor px-4 py-6 border-opacity-40 hover:border-transparent hover:shadow-customShadowOne hover:shadow-gray-600 transition-hover duration-500 h-full">
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-contain rounded-lg"
        />
      </div>
      <div>
        <p className="relative w-full h-auto px-3 group text-borderColor font-titleFont text-base">
          {no}
          <span className="w-full h-[.5px] bg-borderColor absolute left-0 bottom-0"></span>
          <span className="w-[1px] h-[10px] bg-borderColor absolute left-0 bottom-0"></span>
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold uppercase">{title}</h3>
        {startingAmt && (
          <h2 className="text-4xl font-bodyFont mt-1 font-semibold">{startingAmt}</h2>
        )}
      </div>
      <div className="flex-grow">
        <ul className="flex flex-col gap-2">
          {[detailsOne, detailsTwo, detailsThree, detailsFour, detailsFive].filter(Boolean).map((detail, index) => (
            <li key={index} className="flex items-center gap-4 text-base text-darkText hover:text-secondaryColor transition-hover duration-300 hover:cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-44">
        <Button
          onClick={handleOrder}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default ServicesDetails;
