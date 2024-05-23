// DOWNLOAD
function download() {
    // Cria um link temporário
    const link = document.createElement('a');

    link.download = 'portfolio.pdf';
    
    const url = ('pdf/portfolio.pdf');
   
    link.href = url;
    link.click();
}