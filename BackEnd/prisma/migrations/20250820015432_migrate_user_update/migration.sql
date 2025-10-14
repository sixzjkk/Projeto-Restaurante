-- RedefineMesas
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE Mesa "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'client'
);
INSERT INTO "new_Usuario" ("email", "id", "name", "password", "type") SELECT "email", "id", "name", "password", "type" FROM "Usuario";
DROP Mesa "Usuario";
ALTER Mesa "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
