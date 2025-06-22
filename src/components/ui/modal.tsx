import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../utils/utils";

interface IModal {
  children: ReactNode;
  onClose: () => void | undefined;
  className?: string;
  isProduct: boolean
}

const rootModal = document.querySelector("#root_modal");

const Modal = ({ onClose, children, className, isProduct }: IModal): null | JSX.Element => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalStyle;

      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return rootModal
    ? createPortal(
      <div
        className="fixed inset-0  z-50 bg-black bg-opacity-50 flex items-center justify-center"
        onClick={handleClose}
      >
        <div className={cn("relative  bg-white sm:rounded-[12px] shadow-xl ", className, {
          "sm:w-[524px] sm:h-[324px] md:w-[684px] md:h-[432px] p-4 md:p-7": isProduct
        })}>
          <button
            onClick={onClose}
            className="absolute top-[19px] right-[19px] text-gray-600 hover:text-black transition duration-200"
          >
            ✕
          </button>
          {children}
        </div>
      </div>,
      rootModal
    )
    : null;
};

export default Modal;