"use client";
import React, { useEffect } from "react";
import { getMessaging, onMessage } from "firebase/messaging";
import firebaseApp from "./utils/firebase";
import { useFcmToken } from "./utils/hooks/useFcmToken";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiAttachment2, RiSendPlaneFill } from "react-icons/ri";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  const { fcmToken, notificationPermissionStatus } = useFcmToken();

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log("Foreground push notification received:", payload);
      });
      return () => {
        unsubscribe();
      };
    }
  }, []);

  console.log(fcmToken);

  return (
    <main className="font-[Roboto Mono] h-[100vh] w-full bg-[#ccc4f4] flex justify-center items-center">
      <div
        id="main-page"
        className="relative h-3/4 w-[90%] xl:w-3/4 bg-white rounded-2xl"
      >
        <div id="header" className="absolute left-4 top-4 flex">
          <div className="h-4 w-4 rounded-full bg-red-600 mr-2"></div>
          <div className="h-4 w-4 rounded-full bg-yellow-400 mr-2"></div>
          <div className="h-4 w-4 rounded-full bg-green-600"></div>
        </div>
        <div className="p-12 flex w-full h-full mt-2">
          <div id="latest-chat" className="w-1/3">
            <div id="search-bar" className="flex h-[5%] justify-between">
              <input
                type="text"
                className="w-[80%] outline-0 text-lg"
                placeholder="Search"
              />
              <FaMagnifyingGlass size={22} />
            </div>
            <div
              id="threads"
              className="h-[95%] overflow-y-scroll no-scrollbar"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div key={i} className="flex justify-between py-3">
                  <div className="h-14 w-14 bg-slate-500 rounded-full"></div>
                  <div className="w-1/2">
                    <span className="text-lg font-bold text-blue-800">
                      Ngoc Giau
                    </span>
                    <p className="text-xs text-gray-700">Hello Anh Toan!</p>
                  </div>
                  <div className="relative">
                    <span className="text-xs text-gray-700">Just now</span>
                    <p className="absolute right-0 text-center h-6 w-6 rounded-full bg-red-500 text-white">
                      3
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="chat-box" className="w-2/3 ml-10 relative">
            <div id="messages" className="w-full h-[95%] relative">
              <div className="left-msg max-w-[70%]">
                <div className="w-fit rounded-xl bg-gray-200 px-3 py-1">
                  hello
                </div>
              </div>
              <div className="right-msg absolute max-w-[70%] right-0">
                <div className="w-fit rounded-xl bg-blue-500 text-white px-3 py-1">
                  hello
                </div>
              </div>
            </div>
            <div
              id="input-msg"
              className="absolute bottom-0 w-full flex justify-between"
            >
              <div className="h-10 w-10 bg-slate-500 rounded-full"></div>
              <input
                type="text"
                className="w-[80%] outline-0 text-lg placeholder-gray-600"
                placeholder="Type a message..."
              />
              <RiAttachment2 size={22} color="gray" />
              <FaRegSmile size={22} color="gray" />
              <RiSendPlaneFill size={22} color="blue" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
