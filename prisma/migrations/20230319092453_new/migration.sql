-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL
);
INSERT INTO "new_User" ("city", "country", "email", "id", "mobile", "name") SELECT "city", "country", "email", "id", "mobile", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
