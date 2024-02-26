import { Page, Grid, useBreakpoints } from '@shopify/polaris';
import { Modal } from '@shopify/polaris';

import { DefaultLayout } from '@/modules/admin/components';

import { EditorProvider, useEditor } from './providers/EditorContext';
import { PagePreview, CustomCss, PageInfo } from './components';

const EditorPageInner = () => {
  const { showModal, toggleModal, showActionBar } = useEditor();

  const breakpoints = useBreakpoints();
  const isXlUp = breakpoints.xlUp;
  const isMdUp = breakpoints.mdUp;
  const isXlDown = breakpoints.xlDown;

  const renderBlocks = () => {
    if (showActionBar && isXlDown) {
      return <CustomCss />;
    }

    return <PageInfo />;
  };

  return (
    <Page fullWidth>
      <Grid>
        {isMdUp && (
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 2, lg: 3, xl: 3 }}>
            {renderBlocks()}
          </Grid.Cell>
        )}
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 4, lg: 9, xl: 6 }}>
          <PagePreview />
        </Grid.Cell>
        {isXlUp && (
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 12, xl: 3 }}>
            <CustomCss />
          </Grid.Cell>
        )}
      </Grid>
      {isXlDown && (
        <Modal open={showModal} onClose={toggleModal} title="Modal" titleHidden>
          {renderBlocks()}
        </Modal>
      )}
    </Page>
  );
};

const EditorPage = () => (
  <EditorProvider>
    <DefaultLayout>
      <EditorPageInner />
    </DefaultLayout>
  </EditorProvider>
);

export default EditorPage;
