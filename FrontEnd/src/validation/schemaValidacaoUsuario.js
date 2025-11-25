import * as Yup from 'yup';

const schemaValidacaoUsuario = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    sobrenome: Yup.string().required('Sobrenome é obrigatório'),
    email: Yup.string().required('E-mail é obrigatório').email(),
    senha: Yup.string().required('Senha é obrigatória').min(6),
    uf: Yup.string().required('UF é obrigatório').min(2).max(2),
    cidade: Yup.string().required('Cidade é obrigatório'),
    bairro: Yup.string().required('Bairro é obrigatório'),
    rua: Yup.string().required('Rua é obrigatório'),
    numeroCasa: Yup.number().typeError('Precisa ser um número').required('Campo obrigatório').positive('Precisa ser maior que zero').integer('Precisa ser inteiro')
});

export default schemaValidacaoUsuario;