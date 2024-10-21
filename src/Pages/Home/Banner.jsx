import img1 from "../../assets/images/homeCarousel/1.jpg";
import img2 from "../../assets/images/homeCarousel/2.jpg";
import img3 from "../../assets/images/homeCarousel/3.jpg";
import img4 from "../../assets/images/homeCarousel/4.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute h-full bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 0)] flex items-center pl-20">
          <div className="space-y-7">
            <h2 className="text-6xl font-bold text-white w-[463px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-lg text-white w-[522px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-[#FF3811] text-white border-none mr-5">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-12 bottom-12 flex gap-5 justify-end">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-[#FF3811] outline-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute h-full bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 0)] flex items-center pl-20">
          <div className="space-y-7">
            <h2 className="text-6xl font-bold text-white w-[463px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-lg text-white w-[522px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-[#FF3811] text-white border-none mr-5">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-12 bottom-12 flex gap-5 justify-end">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-[#FF3811] outline-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute h-full bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21, 0)] flex items-center pl-20">
          <div className="space-y-7">
            <h2 className="text-6xl font-bold text-white w-[463px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-lg text-white w-[522px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-[#FF3811] text-white border-none mr-5">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-12 bottom-12 flex gap-5 justify-end">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-[#FF3811] outline-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex items-center pl-20">
          <div className="space-y-7">
            <h2 className="text-6xl font-bold text-white w-[463px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-lg text-white w-[522px]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-[#FF3811] text-white border-none mr-5">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-12 bottom-12 flex gap-5 justify-end">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-[#FF3811] outline-none"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
