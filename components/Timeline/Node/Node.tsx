import { text } from "@/style/primitives/text.css";
import { Experience } from "@/types/History";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { maskImage, node } from "./Node.css";
import { formatDate } from "./Node.helpers";

interface NodeProps {
  experience: Experience;
  isActive: boolean;
}

export const Node = ({ experience }: NodeProps) => {
  return (
    <div className={node.container}>
      <div className={node.info.container}>
        <div className={node.info.company.container}>
          <div
            className={node.info.company.logo}
            style={assignInlineVars({
              [maskImage]: `url("${experience.logo}")`,
            })}
          />
          <h4 className={text.quaternary}>{experience.company}</h4>
        </div>
        <h3 className={text.tertiary}>{experience.job}</h3>
        <h5 className={text.quinary}>
          {formatDate(experience.start)} &ndash;{" "}
          {experience.end ? formatDate(experience.end) : "Present"}
        </h5>
        <p className={text.senary}>{experience.description}</p>
      </div>
    </div>
  );
};
