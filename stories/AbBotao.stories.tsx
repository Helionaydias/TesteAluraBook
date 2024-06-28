import React, { Component } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbBotao, AbCard } from '../src';

export default {
  title: 'Componentes/AbBotao',
} as ComponentMeta<typeof AbBotao>;

const Template: ComponentStory<typeof AbBotao> = () => <AbBotao />;

export const Primario = Template.bind({});

export default {
  title: 'Componentes/AbCard',
} as ComponentMeta<typeof AbCard>;

const Template: ComponentStory<typeof AbBotao> = () => <AbCard />;

export const Secondary = Template.bind({});
