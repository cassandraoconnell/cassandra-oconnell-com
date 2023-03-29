import { text } from "@/style/primitives/text.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { info, maskImage } from "./Info.css";

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
  span,
}: InfoProps) => {
  return (
    <>
      <div className={info.span}>
        <h1 className={text.primary}>{span}</h1>
      </div>
      <div className={info.details.container}>
        <div className={info.details.company.container}>
          <div
            className={info.details.company.logo}
            style={assignInlineVars({
              [maskImage]: logoUrl,
            })}
          />
          <h4 className={text.quaternary}>{company}</h4>
        </div>
        <h3 className={text.tertiary}>{job}</h3>

        <p className={text.senary}>{description}</p>
      </div>
    </>
  );
};
