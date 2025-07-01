// app/api/register/route.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const { email, password, name } = await request.json()

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) return NextResponse.json({ error: 'Ya existe' }, { status: 400 })

  const hashed = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: { email, name, password: hashed },
  })

  return NextResponse.json({ user: { id: user.id, email: user.email, name: user.name } })
}
