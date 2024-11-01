import { useFormStatus } from "react-dom";
import { FiSend } from "react-icons/fi";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="flex items-center group 
          justify-center gap-2 h-[2.5rem] 
          w-[6.5rem] bg-gray-900 text-white 
          rounded-full outline-none transition-all 
          hover:scale-[1.15] active:scale-[1.15]  
          cursor-pointer borderBlack disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {" "}
      {pending ? (
        <>
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        </>
      ) : (
        <>
          {" "}
          Send{" "}
          <FiSend className="opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
