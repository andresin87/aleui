import React from 'react';
import {
  WithTooltip,
  Icons,
  IconButton,
  TooltipLinkList,
} from '@storybook/components';
import { addons, types } from '@storybook/addons';

import { ADDON_NAME, EVENTS } from './constants';

const verticals = [
  'adevinta',
  'carfactory',
  'coches',
  'epreselect',
  'fotocasa',
  'habitaclia',
  'milanuncios',
  'motos',
  'newconstuction',
  'sui',
  'vibbo',
];

const getSelectedVertical = (
  verticals,
  selectedVertical,
  defaultVerticalName = verticals[0]
) => {
  const verticalIndex = verticals.indexOf(selectedVertical);
  if (verticalIndex >= 0) {
    return verticals[verticalIndex];
  } else {
    return defaultVerticalName;
  }
};

addons.register(ADDON_NAME, (api) => {
  addons.add('design-addon/panel', {
    title: 'Assets',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: ({ active, key }) => {
      const onChange = (vertical) => {
        api.emit(EVENTS.UPDATE, { vertical });
      };
      return (
        <WithTooltip
          placement="top"
          trigger="click"
          closeOnClick
          tooltip={({ onHide }) => (
            <TooltipLinkList
              links={verticals.map((vertical) => ({
                id: vertical,
                title: vertical,
                value: vertical,
                onClick: (i) => {},
                right: <Icons icon="chroma" style={{ opacity: 1 }} />,
              }))}
            />
          )}
        >
          <IconButton
            key="background"
            title="Change the background of the preview"
          >
            <Icons icon="paintbrush" />
          </IconButton>
        </WithTooltip>
      );
    },
  });
});
