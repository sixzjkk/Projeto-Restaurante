# Sistema de um restaurante

**Dupla:**

* Jenifer Gabriely Moreira Porfirio
* Pedro Rossini Lanutti de Moraes
  **Turma:** Informática 6B

---

## Como rodar o BackEnd

```bash
cd BackEnd
npm i
npx prisma generate
npm start
```

---

## Como rodar o FrontEnd

```bash
cd FrontEnd
npm i
npm run dev
```

---

## Tipos de Usuário

O sistema possui dois tipos de login:

### Administrador (adm)

Credencial padrão:

* **E-mail:** admin@admin.com
* **Senha:** admin1

### Cliente (usuário comum)

Credencial padrão:

* **E-mail:** cliente@cliente.com
* **Senha:** cliente

Ou você pode criar sua própria conta pelo formulário de cadastro.

---

## Funcionalidades por Perfil

* **Cadastrar Mesa** → disponível somente para **administradores**, no perfil do usuário adm
* **Minhas Reservas** → disponível somente para **clientes**, no perfil do usuário comum

---

## Gerenciamento de Usuários Administradores

Para criar um usuário administrador:

1. Crie uma conta normalmente pelo cadastro (ela será criada como cliente).
2. Abra o Prisma Studio:

```bash
cd BackEnd
npx prisma studio
```

3. Localize o usuário criado e altere o campo **tipo** para `"adm"`.