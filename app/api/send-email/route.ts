import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Create email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
    `.trim()

    // For now, we'll use a simple mailto approach
    // You can integrate with an email service like Resend, SendGrid, or use Nodemailer
    
    // Return success - the actual email sending would happen here with a service
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully',
      data: { name, email, phone, message }
    })
    
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process form' },
      { status: 500 }
    )
  }
}
