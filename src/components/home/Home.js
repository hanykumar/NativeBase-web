import React, { useState } from "react";

import "./Home";
import nativebase_logo from "../../assets/nativebase_logo.jpeg";
import code from "../../assets/code.png";
import background from "../../assets/background.png";
import app_store from "../../assets/app_store.png";
import demo from "../../assets/demo.png";
import qrcode from "../../assets/qrcode.png";
import android_example from "../../assets/android_example.png";
import icon_android from "../../assets/icon_android.png";
import icon_ios from "../../assets/icon_ios.png";
import input_ios from "../../assets/input_ios.png";
import input_android from "../../assets/input_android.png";
import button_ios from "../../assets/button_ios.png";
import button_android from "../../assets/button_android.png";
import title_ios from "../../assets/title_ios.png";
import title_android from "../../assets/title_android.png";
import slack_native from "../../assets/slack_native.png";
import nativebase_stack from "../../assets/nativebase_stack.png";
import flatApp_stack from "../../assets/flatApp_stack.png";

function Home() {
  const [iconIos, setIconIos] = useState(false);
  const [inputIos, setInputIos] = useState(false);
  const [buttonIos, setButtonIos] = useState(false);
  const [titleIos, setTitleIos] = useState(false);

  return (
    <div>
      <div class="bg-secondary w-100 text-center" style={{ height: 1000 }}>
        <div class="bg-dark py-3 align-middle">
          <h4 class="text-center text-white text-bold">
            Announcing BuilderX, the Design Tool for React & React Native!
          </h4>
        </div>
        <div style={{ backgroundColor: "#2e2b56" }}>
          <nav
            class="navbar navbar-expand-md text-center justify-content-between position-static"
            style={{
              width: "1024px",
              display: "inline-flex",
            }}
          >
            <a href="/" class="navbar-brand">
              NativeBase
            </a>
            <button
              type="button"
              class="navbar-toggler bg-light"
              data-toggle="collapse"
              data-target="#nav"
            >
              <p>Menu</p>
            </button>

            <ul class="navbar-nav text-white form-inline ml-5" id="nav">
              <li class="navbar-item">
                <a
                  href="/"
                  class="nav-link text-uppercase text-light font-weight-bold px-4"
                >
                  Docs
                </a>
              </li>
              <li class="navbar-item">
                <a
                  href="/"
                  class="nav-link text-uppercase text-light font-weight-bold px-4"
                >
                  github
                </a>
              </li>
              <li class="navbar-item" data-toggle="dropdown">
                <a
                  href="/"
                  class="nav-link text-uppercase text-light font-weight-bold px-4 dropdown-toggle"
                >
                  Connect
                </a>
              </li>
              <li class="navbar-item">
                <a
                  href="/"
                  class="nav-link text-uppercase text-light font-weight-bold px-4"
                >
                  Hire us
                </a>
              </li>
              <li class="navbar-item">
                <a
                  href="/"
                  class="nav-link text-uppercase text-light font-weight-bold px-4"
                >
                  Market
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          class="d-flex justify-content-between"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button
            class="px-5 border-0 text-white"
            style={{ backgroundColor: "transparent" }}
          >
            &lt;
          </button>
          <div>
            <div class="d-flex align-items-center justify-content-center m-5 p-2">
              <img
                src={nativebase_logo}
                alt="nativebase"
                width="100"
                height="100"
                class="mx-5"
              />
              <h1 class="text-white align-middle">NativeBase</h1>
            </div>
            <p class="text-light">
              Essential cross-platform UI components for React Native & Vue
              Native
            </p>
            <p class="text-light">100% open source</p>
            <p class="text-light">Currently v2.13.12</p>
            <p class="text-light"> 13,937 stars 1,689 forks </p>
            <img src={code} alt="code" width="100%" height="400" />
          </div>
          <button
            class="px-5 border-0 text-white"
            style={{ backgroundColor: "transparent" }}
          >
            &gt;
          </button>
        </div>
        <div class="bg-dark py-5 d-flex align-items-center justify-content-center">
          <p class="px-3 text-white">Stay updated with the progress</p>
          <input
            class="pr-5 pl-2 rounded-left border-0"
            type="text"
            name="name"
            placeholder="Email Address"
          />
          <button
            class="px-4 rounded-right border-0 text-white font-weight-bold"
            style={{ backgroundColor: "#009c6f" }}
          >
            Sign me up!
          </button>
        </div>
        <div
          class="align-items-center justify-content-center"
          style={{
            height: 1500,
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div class="d-flex align-items-center justify-content-center py-4">
            <img
              src={nativebase_logo}
              alt="nativebase"
              width="100"
              height="100"
              class="mx-5"
            />
            <h3 class="text-white align-middle">
              NativeBase Presents: The Kitchen Sink{" "}
            </h3>
          </div>
          <p class="text-white py-5">Available in Stores</p>
          <img src={app_store} alt="app_store" width="200" height="60" />

          <button
            class="rounded px-4 py-2 text-white font-weight-bold"
            style={{ backgroundColor: "transparent", borderColor: "white" }}
          >
            <img src={demo} alt="demo" class="mr-2" width="50" height="50" />
            Demo
          </button>
          <p class="text-white py-3">Scan with Expo app to see the demo</p>
          <img
            src={qrcode}
            alt="nativebase"
            width="200"
            height="200"
            class="mx-5"
          />
          <p class="text-light py-2">Currently v2.5.0 </p>
          <div class="d-flex align-items-center  justify-content-around py-2">
            <div>
              <p class="text-white">iOS</p>
              <img
                src={android_example}
                width="400"
                height="650"
                alt="android_example"
              />
            </div>
            <div>
              <p class="text-white">Android</p>
              <img
                src={android_example}
                width="400"
                height="650"
                alt="android_example"
              />
            </div>
          </div>
          <button
            class="border-0 p-3 my-4 px-5 text-white font-weight-bold"
            style={{ backgroundColor: "#009c6f", borderRadius: 40 }}
          >
            View on Github
          </button>
        </div>
        <div class="bg-dark pt-5">
          <h2 class="text-white">
            Tired of writing cross platform React components?
          </h2>
          <p class="text-white">
            import from "native-base" and don't worry about the generic
            components
          </p>
          <button
            class="border-0 p-3 my-4 px-5 text-white font-weight-bold bg-primary"
            style={{ borderRadius: 40 }}
          >
            Documentation
          </button>
          <div class="d-flex mt-5 justify-content-around">
            <div>
              <button
                onClick={() => setIconIos(true)}
                class="border-0 m-1 px-4 py-2 text-white font-weight-bold bg-primary rounded"
              >
                IOS
              </button>
              <button
                onClick={() => setIconIos(false)}
                class="border-0 m-1 px-4 py-2 text-white font-weight-bold bg-info rounded"
              >
                ANDROID
              </button>
              {iconIos ? (
                <img src={icon_ios} height="350" alt="icon_ios" />
              ) : (
                <img src={icon_android} height="350" alt="icon_ios" />
              )}
            </div>
            <div>
              <button
                onClick={() => setInputIos(true)}
                class="border-0 m-1 px-4 py-2 text-white font-weight-bold bg-primary rounded"
              >
                IOS
              </button>
              <button
                onClick={() => setInputIos(false)}
                class="border-0 m-1 px-4 py-2 text-white font-weight-bold bg-info rounded"
              >
                ANDROID
              </button>
              {inputIos ? (
                <img src={input_ios} height="350" alt="icon_ios" />
              ) : (
                <img src={input_android} height="350" alt="icon_ios" />
              )}
            </div>
            <div>
              <button
                onClick={() => setButtonIos(true)}
                class="border-0 m-1 px-4 py-2 text-white font-weight-bold bg-primary rounded"
              >
                IOS
              </button>
              <button
                onClick={() => setButtonIos(false)}
                class="border-0 m-1 px-4 py-2 text-white font-weight-bold bg-info rounded"
              >
                ANDROID
              </button>
              {buttonIos ? (
                <img src={button_ios} height="350" alt="icon_ios" />
              ) : (
                <img src={button_android} height="350" alt="icon_ios" />
              )}
            </div>
            <div>
              <button
                onClick={() => setTitleIos(true)}
                class="border-0 m-1 px-4 py-2 text-white font-weight-bold bg-primary rounded"
              >
                IOS
              </button>
              <button
                onClick={() => setTitleIos(false)}
                class="border-0 m-1 px-4 py-2 text-white font-weight-bold bg-info rounded"
              >
                ANDROID
              </button>
              {titleIos ? (
                <img src={title_ios} height="350" alt="icon_ios" />
              ) : (
                <img src={title_android} height="350" alt="icon_ios" />
              )}
            </div>
          </div>
        </div>
        <div
          class="d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "#403873", height: 250 }}
        >
          <img src={slack_native} alt="slack_native" />
          <h2 class=" text-large text-white">
            Connect with us on{" "}
            <span>
              <u>Slack!</u>
            </span>
          </h2>
        </div>
        <div style={{ backgroundColor: "#635DB7", height: 1400 }}>
          <h3 class="text-white py-5">
            Our React Native starter / demo apps made using NativeBase
          </h3>
          <a href="/" class="text-white p-3">
            <h2>Open Source Projects </h2>
          </a>
          <div class="d-flex align-items-center justify-content-center">
            <img src={nativebase_stack} alt="nativebase_stack" />
            <div>
              <ul
                class="ml-5 text-white"
                style={{ width: 600, textAlign: "start" }}
              >
                <li class="p-2">
                  <a href="/" class="text-white">
                    <h3>Native Starter Kit</h3>
                  </a>
                </li>
                <li class="p-2">
                  <a href="/" class="text-white">
                    <h3>Kitchen Sink App</h3>
                  </a>
                </li>
                <li class="p-2">
                  <a href="/" class="text-white">
                    <h3>Twitter Clone</h3>
                  </a>
                </li>
                <li class="p-2">
                  <a href="/" class="text-white">
                    <h3>NativeBase Todo App</h3>
                  </a>
                </li>
                <li class="p-2">
                  <a href="/" class="text-white">
                    <h3>NativeBase Tutorial App</h3>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h2 class="p-3 text-white">Premium Starter Kits</h2>
          <div class="d-flex align-items-center justify-content-center">
            <div class="px-5">
              <ul
                class=" text-white"
                style={{ width: 600, textAlign: "start" }}
              >
                <li class="p-2">
                  <a href="/" class="text-white">
                    <h3>React Native Flat App</h3>
                  </a>
                </li>
                <li class="p-2">
                  <a href="/" class="text-white">
                    <h3>React Native Taxi App With Backend</h3>
                  </a>
                </li>
                <li class="p-2">
                  <a href="/" class="text-white">
                    <h3>React Native E-commerce Pro Theme</h3>
                  </a>
                </li>
                <li class="p-2">
                  <a href="/" class="text-white">
                    <h3>View More </h3>
                  </a>
                </li>
              </ul>
              <h4 class="text-white text-justify">
                Note: NativeBase is 100% open source. The themes are premium for
                the reason that more screens and features are added.
              </h4>
            </div>
            <img src={flatApp_stack} alt="nativebase_stack" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
