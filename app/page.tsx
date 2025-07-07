import { ParaphraseScreen } from '@/components/ParaphraseScreen';
import { Box, Container, Typography } from '@mui/material';

async function getCmsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cms`, {
    next: { revalidate: 3600 },
  });
  return res.json();
}

export async function generateMetadata() {
  const cmsData = await getCmsData();
  return {
    title: cmsData.title,
    description: cmsData.subtitle,
  };
}

export default async function Home() {
  const cmsData = await getCmsData();

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Box mb={'40px'}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            fontSize: '44px',
            lineHeight: '136%',
            letterSpacing: '-0.01em',
            marginBottom: '16px',
          }}
        >
          {cmsData.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            fontSize: '22px',
            lineHeight: '127%',
          }}
        >
          {cmsData.subtitle}
        </Typography>
      </Box>

      <ParaphraseScreen />
    </Container>
  );
}
