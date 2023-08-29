const path = require("path");
const nodemailer = require("nodemailer");

const assetFolder = path.join(__dirname, "../../../asset");

const uploadResume = async (req, res) => {
  const { user_name, user_email, message } = req.body;

  if (!req.files || !req.files.resume) {
    return res.status(400).send("No files were uploaded.");
  }

  const resume = req.files.resume;

  try {
    resume.mv(path.join(assetFolder, resume.name));

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hughiepub@gmail.com",
        pass: "pjejwnrwqnzjqust",
      },
    });

    const mailOptions = {
      from: user_email,
      to: "nguyencaodat270504@gmail.com",
      subject: "New Resume Uploaded",
      text: `${user_name} (${user_email}) has uploaded a new resume.\nMessage: ${message}`,
      attachments: [
        {
          filename: resume.name,
          path: path.join(assetFolder, resume.name),
        },
      ],
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Error sending email:", error);
        res
          .status(500)
          .json({ error: "An error occurred while sending email" });
      } else {
        res.status(200).json({ message: "Resume uploaded and email sent" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { uploadResume };
