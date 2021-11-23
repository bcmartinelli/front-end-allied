import styled from "styled-components";
import PlusIcon from '@components/icons/PlusIcon';
import {
  darkGrey,
  extraLightGrey,
  mediumBlue,
  white,
} from '@themes/colors'

export const Plus = styled(PlusIcon)`
  color: ${mediumBlue};
  font-size: 4rem;
  width: 4rem;
`;

export const PlatformDetail = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Price = styled.span`
  font-size: 3.4rem;
  color: ${darkGrey};
  font-weight: 600;
  text-align: center;
  margin-bottom: 0rem;

  span {
    font-size: 2rem;
    margin-right: 0.5rem;
  }
`;

export const FranchiseValue = styled.span`
  font-size: 2.4rem;
  color: ${white};
  font-weight: 600;
  text-align: center;
  background-color: ${mediumBlue};
  line-height: 1.5;
  width: calc(100% + 4rem);
  margin-bottom: 1rem;
`;

export const Subtitle = styled.span`
  font-size: 0.8rem;
  margin: 0rem auto;
  font-weight: 400;
`;

export const Name = styled.span`
  font-size: 0.9rem;
  text-align: center;
`;

export const DeviceContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  svg {
    font-size: 2.5rem;
    color: ${extraLightGrey};
    position: absolute;
    top: 0.75rem;
    background: ${white};
  }

  hr {
    width: 100%;
    height: 1px;
    background: ${extraLightGrey};
    margin: 2rem 0;
    border: 0;
  }
`;

export const DevicePrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`;

export const InstallmentText = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.9rem;
`;