// app/api/login/route.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET || 'clave_de_prueba'

export async function POST(request: Request) {
  const { email, password } = await request.json()

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return NextResponse.json({ error: 'No encontrado' }, { status: 401 })

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 })

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' })

  return NextResponse.json({ token, user: { id: user.id, email: user.email } })
}
