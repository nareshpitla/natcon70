const SectionTitle = ({
  title,
  paragraph,
  paragraph2,
  paragraph3,
  paragraph4,
  width = "auto",
  center,
  mb = "100px",
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        
        <h4 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl md:text-[30px]">
          {title}
        </h4>
        <p className="text-base text-justify !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
        <p className="text-base text-justify !leading-relaxed text-body-color md:text-lg">
          {paragraph2}
        </p>
        <p className="text-base text-justify !leading-relaxed text-body-color md:text-lg">
          {paragraph3}
        </p>
        <p className="text-base text-justify !leading-relaxed text-body-color md:text-lg">
          {paragraph4}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
