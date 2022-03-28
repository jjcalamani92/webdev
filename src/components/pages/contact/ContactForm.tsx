import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactForm = () => {
  return (
    <form action="/send-email" method="POST">
      <div className="inputBox">
        <input type="text" name="name" placeholder="tu nombre" required />
        <input type="number" name="phone" placeholder="tu numero" required />
      </div>
      <div className="inputBox">
        <input type="email" name="email" placeholder="tu email" required />
        <input type="text" name="asunto" placeholder="asunto" required />
      </div>
      <textarea
        name="message"
        placeholder="tu mensaje"
        id=""
        cols={30}
        rows={10}
        required
      ></textarea>
      <input type="hidden" name="_next" value="" />
      <button type="submit" className="btn">
        {" "}
        enviar mensaje <FontAwesomeIcon
          className="icon"
          icon={faPaperPlane}
        />{" "}
      </button>
    </form>
  );
};
