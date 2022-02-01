import {Clock} from './Clock'


export default {
   title: 'Clock',
   component: Clock
}

export const DefaultExample = () => {
   return <Clock/>
}

export const NoSecondModeExample = () => {
   return <Clock type={'noSecondMode'}/>
}