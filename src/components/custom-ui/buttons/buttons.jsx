import { MdOutlineFileDownload } from "react-icons/md";

export const DownloadButton = () => {
  return (
    <button
      className={`w-fit text-nowrap focus:outline-none px-6 py-3 text-black-primary text-lg font-medium cursor-pointer bg-yellow-primary rounded-lg flex items-center gap-2.5`}
    >
      Download PDF
      <MdOutlineFileDownload className="text-2xl" />
    </button>
  );
};

export const ViewCertificationButton = () => {
  return (
    <button
      className={`w-fit text-nowrap focus:outline-none px-6 py-3 text-black-primary text-lg font-medium cursor-pointer bg-white rounded-lg flex items-center gap-2.5`}
    >
      <Image
        src="/icons/certificate.svg"
        alt="Calendar"
        width={23}
        height={23}
      />
      <span> View Certification</span>
    </button>
  );
};

export const CreateNewCourseButton = () => {
  return (
    <button
      className={`w-fit text-nowrap focus:outline-none px-6 py-3 text-black-primary text-lg font-medium cursor-pointer bg-yellow-primary rounded-lg flex items-center gap-2.5`}
    >
      Create a New Course
    </button>
  );
};
