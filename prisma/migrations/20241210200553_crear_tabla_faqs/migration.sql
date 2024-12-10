-- CreateTable
CREATE TABLE `faqs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` TEXT NOT NULL,
    `value` TEXT NOT NULL,
    `answer` TEXT NOT NULL,
    `createdAt` DATE NOT NULL,
    `updatedAt` DATE NOT NULL,
    `deletedAt` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
