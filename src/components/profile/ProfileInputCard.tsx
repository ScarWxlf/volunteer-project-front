import { User } from "@/lib/types";
import { FormEvent, LegacyRef } from "react";

interface ProfileCardProps {
  id: string;
  ref: LegacyRef<HTMLFormElement>;
  title: string;
  description: string;
  inputs: { title: string; type: string; name: string; placeholder: string; value?: string }[];
  onChange: (name: string, value: string) => void;
  saveChanges: (requestBody: Partial<User>) => Promise<{ [key: string]: string }>;
  errors: { [key: string]: string };
  setErrors: (errors: { [key: string]: string }) => void;
}

export default function ProfileCard({
  id,
  ref,
  title,
  description,
  inputs,
  onChange,
  saveChanges,
  errors,
  setErrors,
}: ProfileCardProps) {
  async function subForm(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const input1 = formData.get(`${inputs[0].name}`)
    const input2 = formData.get(`${inputs[1].name}`)
    const err = await saveChanges({[inputs[0].name]: input1 as string, [inputs[1].name]: input2 as string}) || {}
    console.log(err)
    setErrors(err)
  }
  return (
    <form
      onSubmit={subForm}
      id={id}
      ref={ref}
      className="w-full shadow-lg rounded-lg bg-white p-10 max-[700px]:py-6"
    >
      <div className="flex gap-10 max-[700px]:flex-col max-[700px]:gap-4">
        <div className="w-2/5 max-[700px]:w-full">
          <h1 className="text-3xl font-bold mb-3">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="w-3/5 max-[700px]:w-full max-[700px]:px-0 px-8 xl:px-20 py-3">
          {inputs.map((input, index) => (
            <div className="flex flex-col w-full mb-4" key={index}>
              <label htmlFor="" className="w-full">
                <p className="mb-1">{input.title}</p>
                <input
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={(e) => onChange(input.name, e.target.value)}
                  autoComplete="off"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </label>
              {errors && errors[input.name] && (
                <span className="text-red-500">{errors[input.name]}</span>
              )}
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
        </div>
      </div>
    </form>
  );
}
