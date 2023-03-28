import { text } from "@/style/primitives/text.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { info, maskImage, opacity } from "./Info.css";

export interface InfoProps {
  company: string;
  description: string | null;
  logoUrl: string;
  job: string;
  span: string;
}

export const Info = ({
  company,
  description,
  job,
  logoUrl,
  opacity: propsOpacity,
  span,
}: InfoProps & { opacity: number }) => {
  return (
    <div
      className={info.container}
      style={assignInlineVars({
        [opacity]: `${propsOpacity}`,
      })}
    >
      <div className={info.company.container}>
        <div
          className={info.company.logo}
          style={assignInlineVars({
            [maskImage]: logoUrl,
          })}
        />
        <h4 className={text.quaternary}>{company}</h4>
      </div>
      <h3 className={text.tertiary}>{job}</h3>
      <h5 className={text.quinary}>{span}</h5>
      <p className={text.senary}>{description}</p>
    </div>
  );
};
