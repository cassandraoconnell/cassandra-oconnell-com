import classNames from "classnames";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { text } from "@/style/primitives/text.css";
import { info, maskImage } from "./Info.css";
import { useView } from "@/components/View/View";

export interface InfoProps {
  company: string;
  description: string | null;
  logoUrl: string;
  job: string;
  span: string;
  tags?: string[];
}

export const Info = ({
  company,
  description,
  job,
  logoUrl,
  span,
  tags,
}: InfoProps) => {
  const view = useView();

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
        {view.height > 670 ? (
          <>
            <p className={text.senary}>{description}</p>
            {tags ? (
              <div className={info.details.tags.container}>
                {tags.map((tag) => (
                  <span
                    className={classNames(info.details.tags.tag, text.senary)}
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </>
  );
};
