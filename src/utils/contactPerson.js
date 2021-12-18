export class ContactPerson {
  static get whatsappLink() {
    return `https://wa.me/${import.meta.env.CP_WHATSAPP}`;
  }
}
