const Error = ({ msg }) => {
  return (
    <div className="text-xs md:text-xl font-bold mb-5 text-center text-white uppercase py-2 bg-red-600 rounded-lg border md:h-fit">
      <p>{msg}</p>
    </div>
  );
};

export default Error;
