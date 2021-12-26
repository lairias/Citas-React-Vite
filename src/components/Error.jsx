const Error = ({ mensaje }) => {
  return (<div className="bg-red-300 text-black rounded-lg text-center font-bold p-3 mb-3 ">
    <p>{mensaje}</p>
  </div>)
};
export default Error;