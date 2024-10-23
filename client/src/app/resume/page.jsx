const Resume = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#0A0F29]">
      <iframe
        src="/assets/resume.pdf" // Adjust this path to your resume's location in the public folder
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Resume"
      />
    </div>
  );
};

export default Resume;
