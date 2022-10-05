import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import landingImage from "Assets/images/landing-background.png";
// import mLandingImage from "Assets/images/hero-bg-mobile-landing.svg";

interface LandingStyleProps {
  isMobile?: boolean;
}

export const ImageContainer = styled(Box)<LandingStyleProps>(({ theme, isMobile }) => ({

  background: `url(${landingImage.src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: isMobile ? "auto" : "bottom",
  backgroundSize: "cover",

  paddingLeft: isMobile ? "24px" : "100px",
  paddingRight: isMobile ? "24px" : "100px",

  height: isMobile ? "675px" : "938px",
  marginLeft: isMobile ? "-30px" : "-100px",
  width: isMobile ? "calc(100% + 50px)" : "calc(100% + 200px)",
  [theme.breakpoints.down("md")]: {
    backgroundPositionY: "center"
  }

}));

export const TitleStyle = styled(Typography)<LandingStyleProps>(({ theme, isMobile }) => ({
  fontWeight: 500,
  fontSize: isMobile ? "30px" : "56px",
  lineHeight: isMobile ? "44px" : "65px",
  paddingTop: isMobile ? "6px" : "159px",
  margin: "0 auto",
  marginBottom: isMobile ? "230px" : "0px",
  width: isMobile ? "100%" : "50%",
  color: "#FFFFFF",
  textAlign: "center",
  textAlignLast: "center",

}));

export const SearchBoxStyle = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  // height: "620px",
  marginTop: "120px",
  marginLeft: "115px",
  paddingLeft: "100px",
  paddingRight: "100px",
  width: "calc(100% + -230px)",
  [theme.breakpoints.down("md")]: {
    marginLeft: "-50px",
    paddingLeft: "50px",
    paddingRight: "50px",
    width: "calc(100% + 100px)",
  },
  [theme.breakpoints.down("sm")]: {
    background: "none",
    height: "unset",
    margin: 0,
    marginLeft: "2px",
    padding: 0,
    width: "100%",
  },
}));

export const TextStyle = styled("span")(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "normal",
}));

export const CTAContainer = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.common.white,
  padding: "34px 34px",
  borderRadius: "15px",
  boxShadow: "0px 20px 25px rgba(0, 0, 0, 0.0647421)",
  [theme.breakpoints.down("md")]: {

  },
}));

export const PurpleBackground = styled(Box)<LandingStyleProps>(({ theme, isMobile }) => ({
  backgroundColor: "#914AFF",
  marginTop: isMobile ? "-925px" : "-620px",
  marginLeft: isMobile ? "-20px" : "-100px",
  paddingLeft: "100px",
  paddingRight: "100px",
  width: "calc(100%)",
  height: isMobile ? "600px" : "479px",
  position: "absolute",
}));
