import { spacing } from "@/style/tokens";
import { style } from "@vanilla-extract/css";

export const home = {
  contact: {
    container: style({
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      gap: spacing.xl,
      justifyContent: "center",
      marginTop: spacing.md,
      position: "relative",
      textAlign: "center",
    }),
    details: {
      container: style({
        display: "flex",
        flexDirection: "column",
        gap: spacing.lg,
        width: "50%",
      }),
      item: {
        container: style({
          display: "grid",
          gridTemplateColumns: "50% 50%",
          textAlign: "left",
          width: "100%",
        }),
        list: style({
          display: "flex",
          flexDirection: "column",
          gap: spacing.xs,
        }),
      },
    },
    footer: style({
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      gap: spacing.md,
      paddingBottom: spacing.md,
      position: "absolute",
      width: "100%",
    }),
    gridline: style({
      position: "absolute",
      top: spacing.md,
      width: "100%",
    }),
  },
  introduction: {
    container: style({
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      overflowX: "hidden",
      position: "relative",
      textAlign: "center",
    }),
    name: style({
      top: spacing.md,
      position: "absolute",
    }),
  },
  overview: {
    container: style({
      display: "flex",
      margin: "auto",
      width: "85%",
    }),

    section: style({
      width: "100%",
    }),
  },
};
