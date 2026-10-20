import { useState, useEffect } from "react";

const images = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg", "/banner4.jpg"];

const images_ = [
  { src: "/lan.png", name: "LAN Solutions" },
  { src: "/ip-cam.png", name: "IP Cameras" },
  { src: "/access-ctrl.png", name: "Access Control" },
  { src: "/home-auto.png", name: "Home Automation" },
  { src: "/vsat.png", name: "VSAT Solutions" },
  { src: "/wireless-net-solns.png", name: "Wireless Network Solutions" },
  { src: "/web-services.png", name: "Web Services" },
  { src: "/elect-doc-mngt-system.png", name: "Electronic Document Management" },
];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // const nextSlide = () => {
  //   setCurrentIndex((prev) => (prev + 1) % images.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  // };

  const nextService = () => {
    setServiceIndex((prev) => (prev >= images_.length - 4 ? 0 : prev + 1));
  };

  const prevService = () => {
    setServiceIndex((prev) => (prev <= 0 ? images_.length - 4 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prev) => (prev >= images_.length - 4 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full mx-auto ">
      {/* Banner Slide */}
      <div className="relative w-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[685px] object-cover"
        />

        {/* <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/80"
          aria-label="Previous banner"
        >
          ❮
        </button> */}

        {/* <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/80"
          aria-label="Next banner"
        >
          ❯
        </button> */}

        {/* Banner dots */}
        {/* <div className="absolute -4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${
                currentIndex === index ? "bg-orange-400" : "bg-white/70"
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div> */}
      </div>

      {/* Services Scroll */}

      <div className="absolute bottom-0 left-0 w-full z-10 bg-white/70">
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${serviceIndex * 25}%)`,
            }}
          >
            {images_.map((image, index) => (
              <div
                key={index}
                className="w-1/4 flex-shrink-0 px-3 py-4 text-center"
              >
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-50 h-40 md:h-50 object-cover rounded-full"
                />

                <h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-800 ">
                  {image.name}
                </h3>
              </div>
            ))}
          </div>

          <button
            onClick={prevService}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 rounded-full hover:bg-black"
            aria-label="Previous services"
          >
            ❮
          </button>

          <button
            onClick={nextService}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 py-1 rounded-full hover:bg-black"
            aria-label="Next services"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};
