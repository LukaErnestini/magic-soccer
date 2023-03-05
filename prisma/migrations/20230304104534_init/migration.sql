-- CreateTable
CREATE TABLE "Gameweek" (
    "id" SERIAL NOT NULL,
    "points" INTEGER NOT NULL,
    "week" INTEGER NOT NULL,

    CONSTRAINT "Gameweek_pkey" PRIMARY KEY ("id")
);
