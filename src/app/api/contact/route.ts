import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation basique
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // TODO: Implémenter l'envoi d'email via SMTP
    // Exemple avec Nodemailer ou Resend
    
    // Pour l'instant, on simule un envoi réussi
    console.log('Contact form submission:', { name, email, phone, subject, message });

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue' },
      { status: 500 }
    );
  }
}


