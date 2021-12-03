import Accordion from './Accordion'
import {ComponentStory} from '@storybook/react'
import React from 'react'

export default {
   component: Accordion,
}

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion{...args}/>
export const BRO = Template.bind({})
BRO.args = {
   title: 'Bro',
   items: [
      {title: 'Art', value: 1},
      {title: 'Mak', value: 3},
      {title: 'Dav', value: 5},
   ],
}

export const STR = Template.bind({})
STR.args = {
   title: 'Str',
   items: [
      {title: 'K', value: 2},
      {title: 'M', value: 4},
   ],
}