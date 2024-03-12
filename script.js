function downloadPDF() {
  // Get the uploaded PDF file
  const fileInput = document.getElementById('pdfFileInput');
  const file = fileInput.files[0];

  // Check if a file is selected
  if (!file) {
    alert('Please select a PDF file.');
    return;
  }

  // Set the filename for the downloaded PDF
  const filename = 'ramadan_timetable_hubli_2024.pdf';

  // Create a new FormData object and append the uploaded file
  const formData = new FormData();
  formData.append('pdfFile', file);

  // Use fetch to send the file to the server and download it
  fetch('/download-pdf', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to upload PDF file.');
    }
    return response.blob();
  })
  .then(blob => {
    // Create a download link for the PDF
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);

    // Display a success message
    
    alert("May our prayers and acts of worship be accepted by Allah during the sacred month of Ramadan.\n\n-Best regards,\nFardin Khan");
  })
  .catch(error => {
    console.error('Error uploading/downloading PDF: ', error);
    alert('Failed to upload/download PDF file.');
  });
}
