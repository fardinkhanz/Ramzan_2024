function downloadPDF() {
  // Replace 'path/to/your/pdf/file.pdf' with the actual path to your PDF file
  const pdfUrl = 'fardinkhanz_github_io_Ramzan_timetable_website_2024 (1)-1';
  
  // Create an anchor element
  const a = document.createElement('a');
  // Set the href attribute to the PDF file URL
  a.href = pdfUrl;
  // Set the download attribute to force download
  a.download = 'ramadan_timetable_hubli_2024.pdf';
  
  // Append the anchor element to the body
  document.body.appendChild(a);
  
  // Programmatically trigger a click event on the anchor element to start the download
  a.click();
  
  // Remove the anchor element from the DOM
  document.body.removeChild(a);
  
  // Display alert message after the PDF is downloaded
  alert("May our prayers and acts of worship be accepted by Allah during the sacred month of Ramadan.\n\n-Best regards,\nFardin Khan");
}
