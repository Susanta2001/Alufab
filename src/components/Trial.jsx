import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useLocation } from 'react-router-dom';

function Trial() {
    const location = useLocation();
const { formData } = location.state || {}; // Destructure formData from the state


    const handleDownloadPDF = async () => {
        const trialElement = document.getElementById('trial-template'); // The element to be captured

        const canvas = await html2canvas(trialElement, {
            scale: 2, // Higher resolution
            useCORS: true, // To handle cross-origin images
            width: trialElement.scrollWidth, // Full width of the content
            height: trialElement.scrollHeight, // Full height of the content
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = pageWidth; // Fit the image to the page width
        const imgHeight = (canvas.height * pageWidth) / canvas.width; // Maintain aspect ratio

        if (imgHeight <= pageHeight) {
            // Single-page content
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        } else {
            // Multi-page content
            let position = 0;
            while (position < imgHeight) {
                pdf.addImage(
                    imgData,
                    'PNG',
                    0,
                    position === 0 ? 0 : -pageHeight,
                    imgWidth,
                    imgHeight
                );
                position += pageHeight;
                if (position < imgHeight) pdf.addPage();
            }
        }

        pdf.save('TrialTemplate.pdf');
    };



    return (
        <div id="trial-template" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Admission Details</h1>
            {formData && Object.entries(formData).map(([key, value]) => (
                <p key={key}>
                    <strong>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong> {value || 'N/A'}
                </p>
            ))}
            <button onClick={handleDownloadPDF}>Download Application Form</button>
        </div>

    );
}

export default Trial;