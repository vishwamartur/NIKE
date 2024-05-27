import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex items-center justify-between w-full gap-10 max-lg:flex-col max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          We Provide You
          <span className="text-coral-red "> Super </span>
          <span className="text-coral-red ">Quality </span>
          Shoes
        </h2>
        <p className="mt-5 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm">
          Discover styles Nike arrivals quality comfort and innovation for your
          active life.
        </p>
        <Button label="View Details" />
      </div>
    </section>
  );
};

export default SuperQuality;
