import Animation from "./Animation";
import Whatsapp from "./Whatsapp";

function Hero() {
  return (
    <div className="m-10">
      <h1 className="text-5xl font-bold text-center">
        <span className="text-blue-500">
          <Animation />
        </span>
        ustası mı arıyorsunuz ?
      </h1>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="border-solid border-8 border-blue-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.3306965424413!2d28.968119916023994!3d40.24706048401589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca1463976e6405%3A0x6d6ad95968234e27!2sAli%20Usta%20Pide%26Kebap%26Lahmacun!5e0!3m2!1str!2str!4v1714652399163!5m2!1str!2str"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <p className="py-6 text-2xl">
              Tüm işleriniz 35 yıllık deneyim ile çözüme ulaşacaktır. <br />
              Telefon NO : 505 - 549 - 24 - 81 <br />
              <span className="flex m-4">
                Whatsapp : <Whatsapp />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;