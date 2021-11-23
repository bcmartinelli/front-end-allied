import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Head from '@components/infra/Head';
import Loading from '@components/commons/Loading';
import RenderedTextField from '@components/ui/wrapped/TextField';
import Text from '@components/ui/Text';
import Button from '@components/ui/Button';
import {
  trim,
  required,
  validateEmail,
  minLengthPhone,
  validateName,
  cpfMask,
  validateCPF,
  phoneMask,
  dateMask,
  minimumAge,
  onlyChar,
} from '@utils/validators'
import { subscribe } from '@store/actions';
import { Main } from '@styles/home.styles';
import { FormTag } from './styles';

const Subscribe = ({handleSubmit}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector((state) => state.offers);
  const {
    query: { sku, planSku },
  } = router

  const onSubmit = async (form) => {
    dispatch(subscribe({ form, sku, planSku }))
  }

  return (
    <>
      <Head title="Allied Connect - Contratar" />
      <Main>
        {sku && planSku ? (
          <>
            <Text variant="pageHeading">Contratar Agora</Text>
            {loading ? (
              <Loading />
            ) : (
              <FormTag maxwidth="sm" onSubmit={handleSubmit((formValue) => onSubmit(formValue))}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      name="fullname"
                      type="text"
                      component={RenderedTextField}
                      label="Nome Completo"
                      normalize={onlyChar}
                      validate={[required, validateName]}
                      placeholder="Informe seu nome completo"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="email"
                      type="email"
                      label="E-mail"
                      component={RenderedTextField}
                      validate={[required, validateEmail]}
                      normalize={trim}
                      placeholder="Informe seu e-mail"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="cpf"
                      type="text"
                      component={RenderedTextField}
                      label="CPF"
                      validate={[required, validateCPF]}
                      normalize={cpfMask}
                      placeholder="Somente números"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Field
                      name="birthdate"
                      component={RenderedTextField}
                      label="Data de nascimento"
                      validate={[required, minimumAge]}
                      normalize={dateMask}
                      placeholder="DD/MM/AAAA"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Field
                      name="telephone"
                      type="text"
                      component={RenderedTextField}
                      label="Telefone"
                      validate={[required, minLengthPhone]}
                      normalize={phoneMask}
                      placeholder="Informe seu telefone"
                    />
                  </Grid>
                </Grid>
                <Button variant="contained" type="submit">
                  Contratar
                </Button>
              </FormTag>
            )}
            <Button
              variant="outlined"
              onClick={() => router.push(`/plataformas/${sku}`)}
            >
              Voltar
            </Button>
          </>
        ) : <Loading />}
      </Main>
    </>
  )
}

export default reduxForm({ form: 'subscribeForm' })(Subscribe)
