import { Fragment, Dispatch, FC, SetStateAction } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface Props {
  content: { name: string; value: any }[];
  state: any;
  setState: Dispatch<SetStateAction<any>>;
  label: string;
  placeholder: string;
  multiple?: boolean;
}

const Dropdown: FC<Props> = ({
  content,
  state,
  setState,
  label,
  placeholder,
  multiple,
}) => {
  return (
    <Listbox value={state} onChange={setState} multiple={multiple}>
      <div className="relative mt-1">
        <Listbox.Label>{label}</Listbox.Label>
        <Listbox.Button className="border px-6 py-4 border-lg rounded-xl w-full">
          <span className="block truncate">
            {(Array.isArray(state) ? state.join(", ") : state) || placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 z-1000 focus:outline-none sm:text-sm">
            {content.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={person.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Dropdown;
