import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import database from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Missing fields' },
        { status: 400 }
      );
    }

    const result = await database.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error: unknown) {
    console.error('❌ Login error:', error);
    return NextResponse.json(
      { message: 'Login failed' },
      { status: 500 }
    );
  }
} 