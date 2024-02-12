const express = require("express");
const pdfmake = require("pdfmake");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/generate-pdf", async (req, res) => {
  try {
    let jsondata = req.body;

    const fonts = {
      Roboto: {
        normal: path.join(
          __dirname,
          "C:/MOHIT/discord/new fonts/Roboto/Roboto-Regular.ttf"
        ),
        bold: path.join(
          __dirname,
          "C:/MOHIT/discord/new fonts/Roboto/Roboto-Bold.ttf"
        ),
        italics: path.join(
          __dirname,
          "C:/MOHIT/discord/new fonts/Roboto/Roboto-Italic.ttf"
        ),
        bolditalics: path.join(
          __dirname,
          "C:/MOHIT/discord/new fonts/Roboto/Roboto-BoldItalic.ttf"
        ),
      },
    };

    let docDefinition = {
      content: [
        {
          text: "JSON Data",
          style: "header",
        },
        {
          text: JSON.stringify(jsondata, null, 4),
          margin: [0, 0, 0, 10],
        },
      ],
      styles: {
        header: {
          font: "Roboto",
          fontSize: 24,
          bold: true,
        },
      },
      fonts: fonts,
    };

    let printer = new pdfmake();
    let pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream("output.pdf"));
    pdfDoc.end();

    res.status(200).send({ message: "PDF generated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error generating PDF" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
