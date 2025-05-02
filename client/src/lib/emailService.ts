import emailjs from 'emailjs-com';

// EmailJS configuration
const SERVICE_ID = 'service_id'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'template_id'; // Replace with your EmailJS template ID
const USER_ID = 'user_id'; // Replace with your EmailJS user ID

/**
 * Initialize EmailJS with user ID
 */
export const initEmailJS = () => {
  emailjs.init(USER_ID);
};

/**
 * Send an email using EmailJS
 * @param formData - The form data to send
 * @returns Promise with the result
 */
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}): Promise<any> => {
  try {
    // Prepare the template parameters
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject || 'Message from Portfolio Contact Form',
      message: formData.message
    };

    // Send the email
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );
    
    return response;
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};