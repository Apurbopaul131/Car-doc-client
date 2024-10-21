import Parts from "../../assets/images/about_us/parts.jpg";
import Person from "../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div className="hero h-[521px] my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={Person} className="w-3/4 rounded-lg" />
          <img
            src={Parts}
            className="w-1/2 rounded-lg absolute top-1/2 right-5 border-8 border-white"
            alt=""
          />
        </div>
        <div className="w-1/2 space-y-[30px]">
          <div className="space-y-[20px]">
          <h6 className="text-xl font-bold text-[#FF3811]">About</h6>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          </div>
          <div className="space-y-[20px]">
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which  look even slightly
            believable.
          </p>
          <p className="">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which look even slightly
            believable.
          </p>
          </div>
          <button className="btn bg-[#FF3811] text-white border-none mr-5">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
