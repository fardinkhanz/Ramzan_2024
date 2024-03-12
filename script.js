  function downloadPDF() {
    const filename = 'ramadan_timetable_hubli_2024.pdf';
    const pdfContent = document.documentElement.outerHTML;
    
    fetch('https://api.html2pdf.app/v1/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        html: pdfContent
      })
    })
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      
      alert("May our prayers and acts of worship be accepted by Allah during the sacred month of Ramadan.\n\n-Best regards,\nFardin Khan");

    })
    .catch(error => console.error('Error generating PDF: ', error));
  }