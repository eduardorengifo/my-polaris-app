import { Box, Card, Text } from '@shopify/polaris';

const PageInfo = () => (
  <Card>
    <Text as="h3" variant="headingSm" fontWeight="medium">
      Page Info
    </Text>
    <Box paddingBlockStart="200">
      <Text as="p" variant="bodyMd">
        The same html tags.
      </Text>
    </Box>
    <Box paddingBlockStart="400">
      <Box padding="100" background="bg-fill-caution-secondary">
        <Box background="bg-surface">
          <h2 id="title">Lorem ipsum dolor sit amet</h2>
          <p id="description">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt u
          </p>
          <button id="cta">Est laborum</button>
        </Box>
      </Box>
    </Box>
  </Card>
);

export default PageInfo;
