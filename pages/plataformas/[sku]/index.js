import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from "styled-components";
import Button from '@mui/material/Button';
import Head from '@components/infra/Head';
import CardsBox from '@components/commons/CardsBox';
import Loading from '@components/commons/Loading';
import { TabletIcon, DesktopIcon, WifiIcon } from '@components/icons';
import Icon from '@components/ui/Icon';
import Text from '@components/ui/Text';
import { fetchPlans } from '@store/actions';
import { Main } from '@styles/home.styles';
import { darkBlue, mediumBlue } from '@themes/colors';

const ButtonTag = styled(Button)`
  width: 100%;
  max-width: 200px;
  border-color: ${darkBlue};
  color: ${darkBlue};
  margin-top: 2rem;
  font-weight: 600;
  &:hover {
    color: ${mediumBlue};
    border-color: ${mediumBlue};
  }
`;

const Platforms = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { hasError, plans, loading } = useSelector((state) => state.offers);
  const {
    query: { sku },
  } = router

  const getPlatformIconSelected = () => {
    if (sku.indexOf("TB", 0) === 0) {
      return <TabletIcon />
    } else if (sku.indexOf("CP", 0) === 0) {
      return <DesktopIcon />
    } else if (sku.indexOf("WF", 0) === 0) {
      return <WifiIcon />
    }
  };

  useEffect(() => {
    if (hasError) {
      router.push('/');
    }
  }, [hasError])

  useEffect(() => {
    if (sku) {
      dispatch(fetchPlans(sku));
    }
  }, [dispatch, sku]);

  return (
    <>
      <Head title="Allied Connect - Planos" />
      <Main>
        {sku ? (
          <>
            <Icon>{getPlatformIconSelected()}</Icon>
            <Text variant="pageHeading">Planos disponíveis</Text>
            {loading ? (
              <Loading />
            ) : (
              <CardsBox component="plans" items={plans} />
            )}
            <ButtonTag
              variant="outlined"
              onClick={() => router.push('/')}
            >
              Voltar
            </ButtonTag>
          </>
        ) : <Loading />}
      </Main>
    </>
  )
}

export default Platforms;
