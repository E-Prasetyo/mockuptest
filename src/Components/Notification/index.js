import React from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const Notification = ({message, isSuccess}) => {
  return (
    <>
          <div
            className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 sm:p-5 md:p-5 lg:p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                  <div className="flex flex-row justify-center items-center">
                    {isSuccess && 
                      <>
                        <CheckCircleIcon className="animate-bounce block h-9 w-9 sm:h-20 sm:w-20 md:h-20 md:w-20 lg:h-20 lg:w-20 text-emerald-500" />
                        <span className="text-sm sm:text-lg md:text-lg lg:text-lg">
                            {message}
                        </span>
                      </>
                    }
                    {!isSuccess && 
                      <>
                        <XCircleIcon className="animate-bounce block h-9 w-9 sm:h-20 sm:w-20 md:h-20 md:w-20 lg:h-20 lg:w-20 text-rose-500" /> 
                        <span className="text-sm sm:text-lg md:text-lg lg:text-lg">
                          {message}
                        </span>
                      </>
                    }
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Notification