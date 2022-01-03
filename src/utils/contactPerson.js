export class ContactPerson {
  static get whatsappLink() {
    return `https://wa.me/${import.meta.env.VITE_CP_WHATSAPP}`;
  }
}
