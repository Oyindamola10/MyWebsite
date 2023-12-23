import Appresponse from "../../helper/appResponse.js";
import Contact from "../../models/Contact.js";

const createContact = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !phone || !subject || !message) {
    return Appresponse(res, 400, "Bad request, missing atrributes");
  }
  try {
    // NOTE: Validate user input before performing any operation

    const newContact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    if (!newContact) {
      return Appresponse(res, 400, "Something went wrong");
    }

    /* 
    You can decided to send a mail to the user telling them 
    their mail has been received and you will get back to them
    */

    return Appresponse(res, 201, "Message created successfully", newContact);
  } catch (err) {
    console.error(err);
    return Appresponse(res, 500, "Internal server error", err);
  }
};

export default createContact;
