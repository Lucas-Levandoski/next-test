import { styled, Box } from "@mui/system";
import headerImage from "Assets/images/hero-bg-404.svg";
import headerMobile from "Assets/images/hero-bg-mobile-error.svg";
import Typography from '@mui/material/Typography';

interface StyleProps {
	isMobile?: boolean;
}


export const ImageBoxStyle = styled(Box)<StyleProps>(({ theme }) => ({
	background: `url(${headerImage.src})`,
	backgroundRepeat: "no-repeat",
	backgroundPosition: "bottom",
	backgroundSize: "cover",
	display: "flex",
	justifyContent: "center",
	flexFlow: "column wrap",
	height: "630px",
	marginTop: "-200px",
	marginRight: "auto",
	marginLeft: "-100px",
	width: "calc(100% + 200px)"
}));

export const TitleStyle = styled(Typography)(({ theme }) => ({
	fontWeight: 700,
	color: "#FFFFFF",
	textAlign: "center",
	fontSize: "48px",
	lineHeight: "50px",
	padding: "0px 0px 25px 0px",
	textTransform: "capitalize",
	[theme.breakpoints.down("md")]: {
		fontSize: "42px",
		lineHeight: "58px",
		padding: "0px 30px 80px 30px"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "24px",
		lineHeight: "25px",
		padding: "30px 0px"
	}
}));

export const ListStyle = styled("ul")(({ theme }) => ({
	width: "90%",
	fontWeight: 300,
	color: "#000000",
	// fontFamily: theme.typography.fontFamily,
	fontSize: "27px",
	lineHeight: "34px",
	listStylePosition: "inside",
	marginLeft: "200px",
	paddingLeft: 0,
	"& li": {
		textIndent: "-1em",
		marginBottom: "30px"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "16px",
		lineHeight: "20px",
		margin: "0 auto",

	}
}));

export const LinkStyle = styled("a")(({ theme }) => ({
	textDecoration: "underline",
	color: "#4F00A8",
	// fontFamily: theme.typography.fontFamily,
	fontSize: "27px",
	lineHeight: "34px",
	"& :clicked": {
		textDecoration: "underline",
		color: "#4F00A8"
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "16px",
		lineHeight: "20px",
	}
}));
