import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Head from '@components/infra/Head';
import Icon from '@components/ui/Icon';
import Text from '@components/ui/Text';
import { Main } from '@styles/home.styles';

const PageNotFound = () => {
  return (
    <>
      <Head title="Allied Connect - 404" />
      <Main>
        <Icon>
          <ErrorOutlineIcon />
        </Icon>
        <Text variant="heading" textalign="center">
          Ops!<br />Página não encontrada
        </Text>
      </Main>
    </>
  )
}

export default PageNotFound;
