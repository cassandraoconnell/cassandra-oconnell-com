import { useCallback, useMemo } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Text } from "@/components/Text/Text";
import {
  experienceBottomVariants,
  experienceLineVariants,
  experienceLogoUrlVar,
  experienceLogoVariants,
  experienceTopVariants,
  experienceSpanVariants,
  experienceExtraInfoVariants,
} from "./Experience.css";

interface ExperienceProps {
  activeId: string | null;
  company: string;
  description: string | null;
  id: string;
  job: string;
  logo: string;
  position: { bottom: number; top: number };
  setActiveId: (id: string | null) => void;
  span: string;
}

export const Experience = ({
  activeId,
  company,
  description,
  id,
  job,
  logo,
  position,
  setActiveId,
  span,
}: ExperienceProps) => {
  const isActive = useMemo(() => activeId === id, [activeId, id]);

  const onMouseEnter = useCallback(() => {
    setActiveId(id);
  }, [id, setActiveId]);

  const onMouseLeave = useCallback(() => {
    setActiveId(null);
  }, [setActiveId]);

  return (
    <>
      <div
        className={
          isActive
            ? experienceSpanVariants.active
            : experienceSpanVariants.default
        }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ bottom: position.bottom, top: position.top }}
      />
      <div
        className={
          isActive
            ? experienceTopVariants.active
            : experienceTopVariants.default
        }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ bottom: position.bottom }}
      >
        <div
          className={
            isActive
              ? experienceLogoVariants.active
              : experienceLogoVariants.default
          }
          style={assignInlineVars({ [experienceLogoUrlVar]: `url("${logo}")` })}
        />
        <Text
          as="span"
          color={isActive ? "dark" : "light"}
          family="mono"
          size="small"
          weight="bold"
        >
          {company}
        </Text>
      </div>
      <div
        className={
          isActive
            ? experienceLineVariants.active
            : experienceLineVariants.default
        }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ bottom: position.bottom }}
      />
      <div
        className={
          isActive
            ? experienceBottomVariants.active
            : experienceBottomVariants.default
        }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ bottom: position.bottom }}
      >
        <Text
          as="p"
          color={isActive ? "dark" : "light"}
          family="mono"
          size="small"
          weight="bold"
        >
          {job}
        </Text>
        <div
          className={
            isActive
              ? experienceExtraInfoVariants.active
              : experienceExtraInfoVariants.default
          }
        >
          <Text
            as="p"
            color={isActive ? "dark" : "light"}
            family="mono"
            size="small"
            weight="normal"
          >
            {span}
          </Text>
          {description ? (
            <Text
              as="p"
              color={isActive ? "dark" : "light"}
              family="sans"
              size="small"
              weight="normal"
            >
              {description}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};
