import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const TemplatePage = ({ data }) => {
  const contentRef = useRef(null);

  const downloadPdf = () => {
    if (!contentRef.current) {
      console.error('Error: Content reference is null.');
      return;
    }

    html2canvas(contentRef.current, { useCORS: true })
      .then((canvas) => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
        pdf.save('resume.pdf');
      })
      .catch((error) => {
        console.error('Error during PDF generation:', error);
      });
  };

  return (
    <div className='wrapper'>
      <div ref={contentRef} className="template row1">
        <div className="contact box">
          <div className='d-flex justify-content-center'>
            <img src={data.image} alt="User" className=' rounded-circle' height={150} width={150} />
          </div>
          <br /><br />
          <h6>PROFILE</h6>
          <p>{data && data.profile}</p><br /><br />
          <h6>CONTACT</h6>
          <p><i className="fas fa-phone"></i> {data?.phno}</p>
          <p><i className="fas fa-envelope"></i> {data?.email}</p>
          <p><i className="fas fa-map-marker-alt"></i> {data?.address}</p>

          <h6>SOCIAL LINKS</h6>
          {data?.linkedin && <p><i className="fab fa-linkedin"></i> {data.linkedin}</p>}
          {data?.website && <p><i className="fas fa-globe"></i> {data.website}</p>}
          {data?.twitter && <p><i className="fab fa-twitter"></i> {data.twitter}</p>}
          {data?.github && <p><i className="fab fa-github"></i> {data.github}</p>}

          <h6>LANGUAGES</h6>
          <p>{data?.languages}</p>
        </div>
        <div className="box">
          <div className="name-box">
            <h3> {data?.name}</h3>
          </div>
          <div className="details p-4">
            <h4><i className="fas fa-solid fa-plus"></i> EDUCATION</h4><br />
            <p className='text-uppercase'><b>{data?.education?.university}</b></p>
            <p>{data?.education?.degree}</p>
            <p><b>{data?.education?.clgname}</b></p>
            <p>{data?.education?.duration}</p><br />
            <h4><i className="fas fa-solid fa-plus"></i> SKILLS</h4><br />
            <p>{data?.skills}</p><br />
            <h4><i className="fas fa-solid fa-plus"></i> EXPERIENCE</h4><br />
            <p>{data?.experience}</p><br />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button onClick={downloadPdf} className='btn btn-success'>Download PDF</button>
      </div>
    </div>
  );
}

export default TemplatePage;