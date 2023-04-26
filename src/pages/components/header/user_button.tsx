import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faChevronUp, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Popover } from "@headlessui/react";
import R from "react";
import { StateContext } from "@/state";
import { Actions } from "@/type";

export default function UserButton({
  iconSize = "w-8 md:w-10",
}: {
  iconSize: string;
}) {
  const [loggedIn, setLoggedIn] = R.useState<boolean>(false);
  const { dispatch } = R.useContext(StateContext);

  return (
    <>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className="focus:outline-none"
            >
              <I
                icon={faCircleUser}
                className={`${iconSize} ${
                  open ? "text-green-700" : "text-black"
                }`}
              />
            </Popover.Button>
            <Popover.Overlay className={"fixed inset-0 bg-black opacity-30"} />
            <Popover.Panel
              className={[
                // Position
                "fixed",
                "right-0",
                // Size
                "w-full md:w-[20rem]",
                "h-full",
                "p-4",
                // Style
                "bg-white",
                "shadow-lg",
              ].join(" ")}
            >
              {({ close }) => (
                <>
                  {loggedIn ? (
                    <>
                      <div className="w-full pt-2 py-1">
                        <button
                          type="button"
                          className="w-full flex justify-center py-2 px-4 border-2 shadow-sm text-sm font-bold rounded-full text-green-500 border-green-500 uppercase"
                          onClick={() => setLoggedIn(false)}
                        >
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Login Title */}
                      <div className="flex justify-center items-center py-2 border-b-4 border-black">
                        <div className="text-md font-bold uppercase pr-1">
                          LOGIN TO YOUR ACCOUNT
                        </div>
                        <I
                          icon={faChevronUp}
                          className="w-6"
                          onClick={() => close()}
                        />
                      </div>
                      {/* Login Form */}
                      <div className="flex flex-col justify-center items-center py-2">
                        <form className="w-full">
                          <div className="flex flex-col justify-center items-center">
                            {/* Email */}
                            <input
                              type="email"
                              autoComplete="email"
                              placeholder="Email Address"
                              className="my-1 px-1 w-full shadow-sm sm:text-sm border-black border-[1px]"
                            />
                            {/* Password */}
                            <input
                              type="password"
                              placeholder="Password"
                              autoComplete="current-password"
                              className="my-1 px-1 block w-full shadow-sm sm:text-sm  border-black border-[1px]"
                            />

                            {/* Remember me */}
                            {/* <div className="w-full">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <input
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                  />
                                  <label
                                    htmlFor="remember_me"
                                    className="ml-2 block text-sm text-gray-900"
                                  >
                                    Remember me
                                  </label>
                                </div>
                              </div>
                            </div> */}

                            {/* Login button */}
                            <div className="w-full pt-2 py-1">
                              <button
                                type="button"
                                className="w-full flex justify-center py-2 px-4 border-2 shadow-sm text-sm font-bold rounded-full text-green-500 border-green-500 uppercase"
                                onClick={() => {
                                  setLoggedIn(true);
                                  close();
                                }}
                              >
                                Login
                              </button>
                            </div>
                            {/* Forget password button */}
                            <div className="w-full py-1">
                              <button
                                type="button"
                                className="w-full flex justify-center py-2 px-4 border-2 shadow-sm text-sm font-medium rounded-full text-gray-700 border-gray-700 uppercase"
                              >
                                FORGOT PASSWORD?
                              </button>
                            </div>
                            <div className="w-full py-1">
                              <button
                                type="button"
                                className="w-full flex justify-center py-2 px-4 border-2 border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-gray-700 uppercase"
                              >
                                CREATE AN ACCOUNT
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </>
                  )}
                </>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
