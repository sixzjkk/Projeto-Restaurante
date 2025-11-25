import * as Yup from 'yup';

const schemaCadastrarReserva = Yup.object().shape({
    mesa_id: Yup.number().typeError('Selecione uma mesa válida').required('Mesa é obrigatória'),
    contato: Yup.string().transform((value) => value.replace(/\D/g, '')).required('Telefone é obrigatório').matches(/^\d{10,11}$/, 'Telefone inválido'),
    dataReserva: Yup.string().required('Data é obrigatória'),
    horarioReserva: Yup.string().required('Horário é obrigatório'),
    n_pessoas: Yup.number().typeError('Selecione o número de pessoas').required('Número de pessoas é obrigatório').min(1, 'Selecione pelo menos 1 pessoa')
});

export { schemaCadastrarReserva };