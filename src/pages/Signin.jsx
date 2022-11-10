import { useRef, useEffect, useState } from "react";
import axios from "axios";
import LoadingBar from "react-top-loading-bar";
import { ReactComponent as IconFormEmail } from "../assets/ico/ic-mail.svg"
import { ReactComponent as IconFormLock } from "../assets/ico/ic-lock.svg";

export default function Signin() {
  const [isLoading, setIsLoading] = useState(true);
  const [sampleData, setSampleData] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      ref?.current?.continuousStart();

      const response = await axios(
        "https://random-data-api.com/api/restaurant/random_restaurant?size=15",
        {
          setTimeout: 2500,
        },
      );

      setSampleData(response.data);
      ref?.current?.complete();
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <LoadingBar
        color="#0a0c0f"
        height={5}
        shadowStyle={{
          boxShadow: "0 0 1rem #0a0c0f",
        }}
        ref={ref}
      /> */}

      {/* <div         
        id="appContainer"
        className="flex xl:justify-center lg:justify-between justify-center h-full"
      > */}

      <div         
        id="appContainer"
        className="app-container flex absolute "
      >
        <div>
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b-2 border-gray-400 py-2 mb-6 font-neue-machina font-norma">
              <IconFormEmail className="h-6 w-6" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <input
              id="InputUsername" type="text" placeholder="Email Address"
              className="appearance-none bg-transparent border-none w-full text-custom-black-900 mr-3 py-1 px-2 leading-tight focus:outline-none" />
            </div>

            <div className="flex items-center border-b-2 border-gray-400 py-2 mb-6 font-neue-machina font-norma">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>

              <input
              id="InputPassword" type="password" placeholder="Password"
              className="appearance-none bg-transparent w-full text-custom-black-900 mr-3 py-1 px-2 leading-tight focus:outline-none" />
            </div>
          </form>

            <div className="bg-noise-black">
              <div className="flex justify-center border-gray-400">
              <span className="text-custom-white-900">Login</span>
              </div>
            </div>
            
        </div>
      </div>
    </>
  );
}
