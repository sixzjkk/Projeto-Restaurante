import * as Yup from 'yup';

const schemaCadastrarMesa = Yup.object().shape({
    codigo: Yup.string().required('O código é obrigatório').max(5, 'O código não pode ter mais que 5 caracteres'),
    n_lugares: Yup.number().typeError('A capacidade precisa ser um número').required('A capacidade é obrigatória')
});

export { schemaCadastrarMesa };