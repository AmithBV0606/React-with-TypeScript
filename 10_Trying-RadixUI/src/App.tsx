import { Box, Progress, ThemePanel } from "@radix-ui/themes";

export default function MyApp() {
	return (
		<div>
      <ThemePanel />
      <Box maxWidth="300px" >
        <Progress  size="3"/>
      </Box>
    </div>
  )
}