// import React from 'react'

function PDFViewer(url: any) {
  return (
    // <PDFViewer width={700} height={700}>
    //   {children}
    // </PDFViewer>
    <div className="flex justify-center items-center h-screen">
      <iframe
        src={url}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Document PDF"
      />
    </div>
  )
}

export default PDFViewer;


