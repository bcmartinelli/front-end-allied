import React from "react";
import { useRouter } from 'next/router';
import { DesktopIcon, TabletIcon, WifiIcon } from '@components/icons';
import Icon from '@components/ui/Icon';
import Button from '@components/ui/Button';
import { parseDescription } from '@utils/parseDescription';
import { DetailContainer, Name, Description } from './styles';

const PlatformDetail = ({ platform }) => {
  const router = useRouter()

  const getPlatformIcon = (platform) => {
    switch(platform) {
      case 'Computador':
        return <DesktopIcon />
      case 'Tablet':
        return <TabletIcon />
      case 'WI-FI':
        return <WifiIcon />
      default:
        ''
    }
  }

  const selectPlatform = (sku) => router.push(`plataformas/${sku}`);

  return (
    <>
      <DetailContainer>
        <Icon>{getPlatformIcon(platform.nome)}</Icon>
        <Name>{platform.nome}</Name>
        <Description>{parseDescription(platform.descricao)}</Description>
      </DetailContainer>
      <Button variant="contained" onClick={() => selectPlatform(platform.sku)}>
        Selecionar
      </Button>
    </>
  );
};

export default PlatformDetail;