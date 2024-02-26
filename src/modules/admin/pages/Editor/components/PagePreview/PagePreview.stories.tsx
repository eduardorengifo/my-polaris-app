import type { Meta, StoryObj } from '@storybook/react';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import { EditorProvider } from '../../providers/EditorContext';

import PagePreview from './PagePreview';

const meta: Meta<typeof PagePreview> = {
  component: PagePreview,
  decorators: (Story) => (
    <EditorProvider>
      <AppProvider i18n={enTranslations}>
        <Story />
      </AppProvider>
    </EditorProvider>
  ),
};

export default meta;
type Story = StoryObj<typeof PagePreview>;

export const Default: Story = {};
