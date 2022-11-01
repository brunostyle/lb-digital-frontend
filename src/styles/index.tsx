import { Grid, styled, Text, Button as ButtonNext, Container as ContainerNext } from '@nextui-org/react'
import gradient from "/gradient.svg";

export const WrapContainer = styled('div', {
  maxWidth: '1400px',
  margin: 'auto',
  width: '90%',
  '@xs': { width: '95%' }
})

export const Wrap = styled(Grid, {
  display: 'grid',
  gap: '1em',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gridAutoRows: '350px',
})

export const GridContainer = styled('div', {
  width: '90%',
  maxWidth: '650px',
  margin: '1em auto',
  display: 'grid',
  gap: '1em',
  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'
})

export const Between = styled('div', {
  display: 'flex',
  gap: '1em',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const Button = styled(ButtonNext, {
  variants: {
    type: {
      normal: {
        width: '100%', height: '2rem', fontSize: '.9em'
      },
      auto: {
        width: 'auto', height: '2rem', fontSize: '.9em',
      },
      white: {
        width: '100%', height: '2rem', fontSize: '.9em', bc: 'white', color: 'gray', shadow: '1px 1px 10px rgba(0,0,0,.4)'
      }
    },

  },
  defaultVariants: {
    type: 'normal',
  },
})

export const SectionTitle = styled(Text, {
  textAlign: 'center',
  fontSize: '1.5em',
  fontWeight: 'bold',
});

export const SectionSubTitle = styled(Text, {
  color: 'gray !important',
  fontSize: '.8em',
  textAlign: 'center',
});

export const Title = styled(Text, {
  fontSize: '1.3em',
  fontWeight: '500',
});

export const Subtitle = styled(Text, {
  color: 'gray !important',
  fontSize: '.8em',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
})

export const HiddenTitle = styled(Text, {
  fontSize: '1em',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
})

export const Gradient = styled('div', {
  minHeight: '100vh',
  backgroundImage: `url(${gradient})`,
  backgroundBlendMode: 'soft-light',
  backgroundPosition: 'center',
  backgroundColor: '$opacity',
})

export const Container = styled(ContainerNext, {
  marginTop: '1em',
  '@xsMax': {
    padding: '0 !important',
  }
})

export const StyledRole = styled('span', {
  display: 'inline-block',
  textTransform: 'uppercase',
  padding: '$2 $3',
  margin: '0 2px',
  fontSize: '10px',
  fontWeight: '$bold',
  borderRadius: '14px',
  letterSpacing: '0.6px',
  lineHeight: 1,
  boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
  alignItems: 'center',
  alignSelf: 'center',
  variants: {
    type: {
      admin: {
        bg: '$warningLight',
        color: '$warningLightContrast',
      },
      client: {
        bg: '$errorLight',
        color: '$errorLightContrast',
      },
    },
  },
  defaultVariants: {
    type: 'admin',
  },
});

export const Main = styled('main', {
  padding: '1em 0',
});

export const Center = styled('div', {
  width: '90%',
  maxWidth: '300px',
  textAlign: 'center',
  margin: '50px auto 0',
});

export const cell = { px: '1em', maxWidth: '100px' }
export const grid = { width: '100%', margin: 'auto', padding: 0 }
