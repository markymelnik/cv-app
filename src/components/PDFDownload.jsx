import html2canvas from "html2canvas";
import { PDFDocument } from "pdf-lib";

const PDFDownload = ({ resumeRef }) => {

  const handleDownloadPDF = async () => {
    const content = resumeRef.current;
  
    const dpi = 300;
    const scale = dpi / 96;
  
    const canvas = await html2canvas(content, { scale });
    const imgData = canvas.toDataURL('image/png');
  
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
  
    const imgWidthInPoints = imgWidth * 72 / dpi;
    const imgHeightInPoints = imgHeight * 72 / dpi;
  
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([imgWidthInPoints, imgHeightInPoints]);
    const img = await pdfDoc.embedPng(imgData);
  
    page.drawImage(img, {
      x: 0,
      y: 0,
      width: imgWidthInPoints,
      height: imgHeightInPoints,
    });
  
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="download-pdf-btn" onClick={handleDownloadPDF}>
      Download PDF
    </button>
  );

}

export default PDFDownload;
