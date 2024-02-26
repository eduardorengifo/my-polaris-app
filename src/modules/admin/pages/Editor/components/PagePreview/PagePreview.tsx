import { Box, Card, Text, Button, useBreakpoints } from '@shopify/polaris';
import Frame from 'react-frame-component';

import HomePage from '@/modules/shop/pages/Home';
import { ClientOnly } from '@/shared/components';

import { useEditor } from '../../providers/EditorContext';

const FrameHead = ({ styles }: { styles: string }) => {
  return <style>{styles}</style>;
};

const PagePreview = () => {
  const { styles, toggleModal, setShowActionsBar } = useEditor();
  const breakpoints = useBreakpoints();
  const isMdDown = breakpoints.mdDown;
  const isXlDown = breakpoints.xlDown;

  const initialContent = `<!DOCTYPE html><html><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
	<base target=_blank>
  </head><body><div></div></body></html>`;

  const handleOpenModal = () => {
    setShowActionsBar(true);
    if (isMdDown) {
      toggleModal();
    }
  };

  return (
    <Card>
      <Text as="h3" variant="headingSm" fontWeight="medium">
        Page Preview
      </Text>
      {isXlDown && (
        <Box paddingBlockStart="200">
          <Button onClick={handleOpenModal} variant="primary">
            Edit
          </Button>
        </Box>
      )}
      <Box paddingBlockStart="400">
        <Box padding="100" background="bg-fill-caution-secondary">
          <ClientOnly>
            <Frame
              className="h-[60vh] w-full"
              initialContent={initialContent}
              head={<FrameHead styles={styles} />}
            >
              <HomePage />
            </Frame>
          </ClientOnly>
        </Box>
      </Box>
    </Card>
  );
};

export default PagePreview;
