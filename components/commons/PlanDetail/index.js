import React from "react";
import { useRouter } from 'next/router';
import PlusIcon from '@components/icons/PlusIcon';
import Button from '@components/ui/Button';
import {
  PlatformDetail,
  DevicePrice,
  InstallmentText,
  Price,
  FranchiseValue,
  DeviceContainer,
  Subtitle
} from './styles';


const PlanDetail = ({ plan }) => {
  const router = useRouter()
  const {
    query: { sku },
  } = router

  const selectPlatform = (planSku) => router.push(`${sku}/planos/${planSku}/assinar`);

  return (
    <>
      <PlatformDetail>
        <FranchiseValue>
          {plan.franquia}
        </FranchiseValue>
        <Price>
          <span>R$</span>
          {plan.valor}
        </Price>
        <Subtitle>por mês</Subtitle>

        {plan?.aparelho && (
          <DeviceContainer>
            <PlusIcon />
            <hr />
            <DevicePrice>
              <span>{plan.aparelho.nome}</span>
              <strong>R$ {plan.aparelho.valor}</strong>
            </DevicePrice>
            <InstallmentText>
              Em até <strong>{plan.aparelho.numeroParcelas}x</strong>{' '}
              de <strong>R$ {plan.aparelho.numeroParcelas > 1 ? plan.aparelho.valorParcela : plan.aparelho.valor}</strong>
            </InstallmentText>
          </DeviceContainer>
        )}
      </PlatformDetail>
      <Button variant="contained" onClick={() => selectPlatform(plan.sku)}>
        Selecionar
      </Button>
    </>
  );
};

export default PlanDetail;