import React from "react";

const Modal = ({title, children}) => {
  return (
    <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-80 sm:w-max my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-300 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-3 sm:p-5 md:p-5 lg:p-5">
                    <p className="text-2xl font-bold">{title.toUpperCase()}</p>
                </div>
                 {/*isi*/}
                <div className="container w-full px-2 py-4">
                    {children}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal