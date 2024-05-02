import Animation from "./Animation";
import Whatsapp from "./Whatsapp";

const phoneNumber = "+905055492481";

const handlePhoneClick = () => {
  // Mobil tarayıcıda ise arama yap
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    window.location.href = `tel:${phoneNumber}`;
  } else {
    // Masaüstünde ise uyarı ver
    alert("Bu numarayı aramak için lütfen mobil cihazınızı kullanın.");
  }
};

function Hero() {
  return (
    <div className="m-11 md:mb-48">
      <h1 className="md:text-5xl font-bold text-center">
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
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <p className="py-6 md:text-2xl">
              Tüm işleriniz 35 yıllık deneyim ile çözüme ulaşacaktır. <br />
                   <a href="#" onClick={handlePhoneClick}>
                +905055492481
              </a> <br />
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
