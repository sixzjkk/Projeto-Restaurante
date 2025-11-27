/*
  Warnings:

  - Added the required column `contato` to the `Reserva` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reserva" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario_id" INTEGER NOT NULL,
    "mesa_id" INTEGER NOT NULL,
    "contato" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "n_pessoas" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Reserva_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reserva_mesa_id_fkey" FOREIGN KEY ("mesa_id") REFERENCES "Mesa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reserva" ("data", "id", "mesa_id", "n_pessoas", "status", "usuario_id") SELECT "data", "id", "mesa_id", "n_pessoas", "status", "usuario_id" FROM "Reserva";
DROP TABLE "Reserva";
ALTER TABLE "new_Reserva" RENAME TO "Reserva";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
