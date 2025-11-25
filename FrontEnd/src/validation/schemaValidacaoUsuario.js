import * as Yup from 'yup';

const schemaCadastrarUsuario = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    sobrenome: Yup.string().required('Sobrenome é obrigatório'),
    email: Yup.string().required('E-mail é obrigatório').email().typeError('Precisa ser um e-mail válido'),
    senha: Yup.string().required('Senha é obrigatória').min(6, 'Senha deve ter no mínimo 6 caracteres'),
    uf: Yup.string().required('UF é obrigatório').length(2, 'UF deve ter exatamente 2 letras'),
    cidade: Yup.string().required('Cidade é obrigatório'),
    bairro: Yup.string().required('Bairro é obrigatório'),
    rua: Yup.string().required('Rua é obrigatório'),
    numeroCasa: Yup.number().typeError('Precisa ser um número').required('Campo obrigatório').positive('Precisa ser maior que zero').integer('Precisa ser inteiro')
});

const schemaLoginUsuario = Yup.object().shape({
    email: Yup.string().required('E-mail é obrigatório').email().typeError('Precisa ser um e-mail válido'),
    senha: Yup.string().required('Senha é obrigatória').min(6, 'Senha deve ter no mínimo 6 caracteres')
});

export { schemaCadastrarUsuario, schemaLoginUsuario };