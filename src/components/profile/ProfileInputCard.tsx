import { RefObject } from "react";

interface ProfileCardProps {
  id: string;
  accountNameRef: RefObject<HTMLDivElement>;
  title: string;
  description: string;
  inputs: { title: string; type: string; name: string; placeholder: string; value?: string }[];
}

export default function ProfileCard({
  id,
  accountNameRef,
  title,
  description,
  inputs,
}: ProfileCardProps) {
  return (
    <div
      id={id}
      ref={accountNameRef}
      className="w-full shadow-lg rounded-lg bg-white p-10 max-[700px]:py-6"
    >
      <div className="flex gap-10 max-[700px]:flex-col max-[700px]:gap-4">
        <div className="w-2/5 max-[700px]:w-full">
          <h1 className="text-3xl font-bold mb-3">{title}</h1>
          <p>{description}</p>
        </div>
        <form action="" className="w-3/5 max-[700px]:w-full max-[700px]:px-0 px-8 xl:px-20 py-3">
          {inputs.map((input, index) => (
            <div className="flex w-full mb-4 gap-5" key={index}>
              <label htmlFor="" className="w-full">
                <p className="mb-1">{input.title}</p>
                <input
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={(e)=>{
                    input.value = e.target.value
                  }}
                  className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </label>
            </div>
          ))}
          <div className="w-full flex justify-center max-[700px]:justify-end">
            <button
              type="submit"
              className="px-10 bg-green-500 text-white py-2 rounded-md font-bold hover:bg-green-600 transition hover:scale-105"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
