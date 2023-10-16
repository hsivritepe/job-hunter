/*
  Warnings:

  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarBinary(255)` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `email` VARCHAR(255) NOT NULL;
