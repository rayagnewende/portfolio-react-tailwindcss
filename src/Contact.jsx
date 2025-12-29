import { useState } from "react";
import SubTitle from "./SubTitle";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3e66d6a0-b376-485d-9013-41fc98b27375");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Votre message a été envoyé avec succès!");
    } else {
      toast.error("Il y a eu un problème lors de l'envoi!");
    }
  };
  return (
    <div className=" px-8 py-20 text-center" id="contact">
      <SubTitle text=" Contact" />
      <div className="flex justify-center items-center mt-10">
        <form
          action=""
          className=" bg-emerald-300 border-2 p-2  rounded-md w-5/12  gap-y-4 text-center "
          onSubmit={onSubmit}
        >
          <div className="form-control my-4">
            <label htmlFor="nom" className="mb-2">
              Nom
            </label>
            <input
              type="text"
              name="nom"
              className="border p-2 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control my-4">
            <label htmlFor="email" className="mb-2 ">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border p-2 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control my-4">
            <label htmlFor="message" className="mb-2">
              Message
            </label>
            <textarea
              name="message"
              id=""
              cols={"100%"}
              className="border rounded-lg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Envoyer"
            className=" my-2 py-2 px-5 font-bold  bg-emerald-600 rounded-lg"
          />
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default Contact;
