import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import database from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { name, surname, email, password } = await request.json();

    if (!name || !surname || !email || !password) {
      return NextResponse.json(
        { message: 'Missing fields' },
        { status: 400 }
      );
    }

    console.log('Received registration data:', { name, surname, email });

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Password hashed:', hashedPassword);

    const insertQuery = 'INSERT INTO users (name, surname, email, password) VALUES ($1, $2, $3, $4)';
    const values = [name, surname, email, hashedPassword];

    console.log('Executing DB query...');
    await database.query(insertQuery, values);

    console.log('User inserted successfully');
    return NextResponse.json({ message: 'User registered' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Registration error:', error);

    if (error && typeof error === 'object' && 'code' in error && error.code === '23505') {
      return NextResponse.json(
        { message: 'Email already registered' },
        { status: 409 }
      );
    } else {
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      return NextResponse.json(
        { message: errorMessage },
        { status: 500 }
      );
    }
  }
} 