const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Total Count:
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          5
        </p>
        <button className="btn btn-primary btn-wide">
          +1
        </button>
      </div>
    </section>
  );
};

export default Hero;
