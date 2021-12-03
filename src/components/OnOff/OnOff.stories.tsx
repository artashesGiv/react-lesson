import OnOff from './OnOff'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export default {
   title: '',
   component: OnOff,
   argTypes: {
      colorOn: {control: 'color'},
      colorOff: {control: 'color'},
   },
} as ComponentMeta<typeof OnOff>

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args}/>
export const OnOff1 = Template.bind({})
OnOff1.args = {
   onTitle: 'Включить',
   offTitle: 'Выключить',
   colorOn: 'gold',
   colorOff: 'blue',
}

export const OnOff2 = Template.bind({})
OnOff2.args = {
   onTitle: 'ВКЛ',
   offTitle: 'ВЫКЛ',
   colorOn: 'pink',
   colorOff: 'crimson',
}

export const OnOff3 = Template.bind({})
OnOff3.args = {
   onTitle: 'Onn',
   offTitle: 'Off',
}