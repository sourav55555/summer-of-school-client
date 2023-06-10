

const Select = ({data}) => {

    const {
        image,
        name,
        instructorName,
        availableSets,
        price,

      } = data;



    return (
        <div className="px-4 py-6 border-2 mt-12 border-black font2 flex items-center gap-6">
      <div className="bg-slate-200 p-4 rounded-xl">
        <img className="w-28 " src={image} alt="" />
      </div>
      <div className="flex-grow space-y-6">
        <div className="flex items-center justify-between">
          <p>
            {" "}
            <span className="font-semibold">Class: </span> {name}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Instructor: </span> {instructorName}
          </p>

        </div>
        <div className="flex items-center gap-12">
          <p>
            {" "}
            <span className="font-semibold">Available Sets: </span>{" "}
            {availableSets}
          </p>
          <p>
            <span className="font-semibold">Price: </span> {price}$
          </p>

        </div>

      </div>
    </div>
    );
};

export default Select;