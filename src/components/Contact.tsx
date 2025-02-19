import { i18n } from "../translation/i18n";

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-12 text-center">{i18n.t('titles.contact')}</h1>
      </div>
    </section>
  );
};

export default Contact;