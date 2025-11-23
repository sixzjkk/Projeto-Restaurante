/*
  Warnings:

  - You are about to drop the column `password` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `bairro` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroCasa` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sobrenome` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numeroCasa" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT 'cliente'
);
INSERT INTO "new_Usuario" ("email", "id", "nome", "tipo") SELECT "email", "id", "nome", "tipo" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
