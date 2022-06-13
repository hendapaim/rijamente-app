-- CreateTable
CREATE TABLE "Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Perfil" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bio" TEXT,
    "fau" TEXT,
    "curso" TEXT,
    "year" INTEGER,
    "alunoId" INTEGER NOT NULL,
    CONSTRAINT "Perfil_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cadeira" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "authorId" INTEGER,
    CONSTRAINT "Cadeira_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Aluno" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Materia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "cadeiraId" INTEGER NOT NULL,
    CONSTRAINT "Materia_cadeiraId_fkey" FOREIGN KEY ("cadeiraId") REFERENCES "Cadeira" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Perfil_alunoId_key" ON "Perfil"("alunoId");

-- CreateIndex
CREATE UNIQUE INDEX "Cadeira_title_key" ON "Cadeira"("title");
