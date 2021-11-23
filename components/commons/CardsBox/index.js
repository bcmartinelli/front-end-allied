import React from "react"
import Grid from '@mui/material/Grid'
import Card from '@components/ui/Card'
import PlatformDetail from '@components/commons/PlatformDetail'
import PlanDetail from '@components/commons/PlanDetail'

const CardsBox = ({ component, items }) => {

  const filterItens = (item) => {
    return component === 'platform' || item.ativo
  }

  return (
    <Grid
      container
      spacing={5}
      justifyContent="center"
      alignItems="stretch"
    >
      {items?.filter(filterItens).map((item, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card>
            { component === 'platform' && <PlatformDetail platform={item} />}
            { component === 'plans' && <PlanDetail plan={item} />}
          </Card>
        </Grid>
      ))}
      {items?.length === 0 ? (
        <Grid item xs={12} sm={6} md={4} textAlign="center">
           { component === 'platform' && 'Nenhuma plataforma disponível no momento.' }
           { component === 'plans' && 'Nenhum plano disponível no momento.' }
        </Grid>
      ) : null}
    </Grid>
  );
};

export default CardsBox;