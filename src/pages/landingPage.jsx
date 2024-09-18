import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/1.jpg";
import image2 from "../assets/3.jpg";
import image3 from "../assets/training.jpg";
import Info from "../components/footer";
import study from '../assets/study.json'
import Lottie from 'lottie-react'
export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="flex flex-col h-full">
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="flex justify-center">
            <Lottie animationData={study} />
          </div>
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              PintarLabs
              <strong className="font-extrabold sm:block" style={{color : "#80BCBD"}}> Level up your mind. </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
            Welcome to our LMS website where learning becomes an adventure! Level up your knowledge, earn coins, and unlock achievements as you progress.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                to="/login"
                style={{ backgroundColor: "#80BCBD" }}
              >
                Login
              </Link>

              <Link
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                to="/register"
                style={{ color: "#80BCBD" }}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="relative w-screen h-screen overflow-hidden bg-white">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link to={"/login"}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                object-fit="contain"
              />
            </Link>
          </div>
        ))}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div> */}

      <hr className="h-px mt-32 mx-16 bg-gray-300 border-0" />
      <h2 className="text-3xl font-bold text-center mt-16 font-extrabold">Our Courses</h2>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-blue border bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://plus.unsplash.com/premium_photo-1661380732508-93beb2601f24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlvbG9neXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-500 mb-3">
                    Biology
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe voluptates incidunt suscipit, eius blanditiis animi
                    culpa libero praesentium mollitia adipisci corrupti nostrum!
                    Blanditiis fugiat harum enim possimus tempore at eligendi.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link to={"/login"}>
                      <button className="bg-blue-300 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                        Learn more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl border shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://images.unsplash.com/photo-1611784601826-d17011218c7b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljfGVufDB8fDB8fHww"
                  alt="blog"
                  object-fit="contain"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-500 mb-3">
                    Physic
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe voluptates incidunt suscipit, eius blanditiis animi
                    culpa libero praesentium mollitia adipisci corrupti nostrum!
                    Blanditiis fugiat harum enim possimus tempore at eligendi.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link to={"/login"}>
                      <button className="bg-amber-300 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                        Learn more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl border shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvbm9teXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="blog"
                  object-fit="contain"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-500 mb-3">
                    Economy
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe voluptates incidunt suscipit, eius blanditiis animi
                    culpa libero praesentium mollitia adipisci corrupti nostrum!
                    Blanditiis fugiat harum enim possimus tempore at eligendi.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link to={"/login"}>
                      <button className="bg-pink-300 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
                        Learn more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Info />
      </section>
    </div>
  );
}
