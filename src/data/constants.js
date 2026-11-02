// Danish Rashid — Brand Constants & Contact Coordinates
export const SITE_METADATA = {
  name: 'Danish Rashid',
  title: 'Full Stack Developer & AI Developer',
  location: 'Multan, Punjab, Pakistan',
  shortLocation: 'MULTAN · PAKISTAN',
  city: 'Multan',
  country: 'Pakistan',
  phoneDisplay: '+92 310 2419596',
  phoneRaw: '923102419596',
  email: 'danishrashid.dev@gmail.com',
  github: 'https://github.com/danishalipny-pixel',
  linkedin: 'https://linkedin.com/in/danish-rashid-688177302',
  whatsappMessage: 'Hello Danish, I found your portfolio and would like to discuss a project with you.',
  availability: 'Available for Freelance & Development Opportunities',
};

// Generates direct WhatsApp click-to-chat URL with zero popups
export const getWhatsAppUrl = (customMessage) => {
  const msg = customMessage || SITE_METADATA.whatsappMessage;
  return `https://wa.me/${SITE_METADATA.phoneRaw}?text=${encodeURIComponent(msg)}`;
};

export const WHATSAPP_URL = getWhatsAppUrl();
