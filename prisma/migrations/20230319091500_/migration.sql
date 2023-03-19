/*
  Warnings:

  - You are about to alter the column `mobile` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Unsupported("biginteger")` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" BIGINT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL
);
INSERT INTO "new_User" ("city", "country", "email", "id", "mobile", "name") SELECT "city", "country", "email", "id", "mobile", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
