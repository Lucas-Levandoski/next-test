import { styled, Box } from "@mui/system";

interface StyleProps{
	padStandard?:any;
	padMobile?:any;
}

export const PageContainer = styled(Box)<StyleProps>(({ theme, padStandard, padMobile }) => ({
	backgroundColor: "#F0EDE0",
	padding: padStandard?padStandard:"92px 100px 80px 100px",
	[theme.breakpoints.down("md")]: {
		padding: "80px 50px 80px 50px"
	},
	[theme.breakpoints.down("sm")]: {
		padding: padMobile?padMobile:"0px 20px 60px 20px"
	}
}));
