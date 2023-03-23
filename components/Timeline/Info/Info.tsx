import { text } from "@/style/primitives/text.css";
import { Experience } from "@/types/History";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { maskImage, info } from "./Info.css";
import { formatDate } from "./Info.helpers";

interface InfoProps {
  experience: Experience;
}

export const Info = ({ experience }: InfoProps) => {
  return (
    <>
      <div className={info.container}>
        <div className={info.info.container}>
          <div className={info.info.company.container}>
            <div
              className={info.info.company.logo}
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
    </>
  );
};
