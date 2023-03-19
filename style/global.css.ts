import { globalStyle } from "@vanilla-extract/css";
import { colors } from "@/style/tokens";

globalStyle("html, body", {
  backgroundColor: colors.dark,
  fontSize: 16,
  margin: 0,
});
