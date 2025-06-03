import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENTS
const CardRoot = styled(Card)({
  height: "100%",
  padding: "20px 24px",
  ".subtitle": { marginBottom: "1rem" }
});

//  TS(2769): No overload matches this call.
const CardTitle = styled("div")(({ subtitle }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize",
  marginBottom: !subtitle && "16px"
}));

export default function SimpleCard({
  children,
  title,
  subtitle
}: any) {
  return (

    <CardRoot elevation={6}>

      <CardTitle subtitle={subtitle}>{title}</CardTitle>

      {subtitle && <div className="subtitle">{subtitle}</div>}
      {children}
    </CardRoot>
  );
}
