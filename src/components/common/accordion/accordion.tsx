import { ReactNode, useState } from "react";

interface AccordionProps {
  items: Array<{
    title: ReactNode;
    content: ReactNode;
  }>;
  className?: string;
}
const Accordion = ({ items, className = "" }: AccordionProps) => {
  const [displayPanel, setDisplayPanel] = useState("");
  const panelHandle = (type: any) => {
    if (type === displayPanel) {
      setDisplayPanel("");
    } else {
      setDisplayPanel(type);
    }
  };

  return (
    <ul className={className}>
      {items.map((item, key) => {
        const mkey = `key_${key}`;
        const currentKey = displayPanel === mkey;
        return (
          <li
            key={mkey}
            className="py-4 border-b border-dotted border-teal-200"
          >
            <div>
              {item.title}
              <span
                aria-hidden="true"
                className={`float-right text-sm cursor-pointer ${
                  currentKey ? "text-denim-300" : "text-denim-500"
                }`}
                onClick={() => panelHandle(mkey)}
              >
                {currentKey ? "hide" : "show"}
              </span>
            </div>
            <div
              className={`accordion text-gray-400 text-xs ${
                currentKey ? "accordion-max-hgight" : "max-h-0 overflow-hidden"
              } `}
            >
              {item.content}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default Accordion;
