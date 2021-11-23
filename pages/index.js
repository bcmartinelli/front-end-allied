import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from '@components/infra/Head'
import CardsBox from '@components/commons/CardsBox'
import Loading from '@components/commons/Loading'
import Text from '@components/ui/Text'
import { fetchPlatforms } from '@store/actions'
import { Main } from '@styles/home.styles'

const Home = () => {
  const dispatch = useDispatch();
  const { platforms, loading } = useSelector((state) => state.offers);

  useEffect(() => {
    dispatch(fetchPlatforms());
  }, [dispatch]);

  return (
    <>
      <Head title="Allied Connect - Plataformas" />
      <Main>
        <Text variant="pageHeading">Plataformas disponíveis</Text>
        {loading ? (
          <Loading />
        ) : (
          <CardsBox component="platform" items={platforms} />
        )}
      </Main>
    </>
  )
}

export default Home;
