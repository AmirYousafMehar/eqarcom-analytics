import React, { useState } from 'react';
import heic2any from 'heic2any';

const HeicToPngConverter = () => {
  const [pngUrl, setPngUrl] = useState('https://eqarcom-files-private.s3.me-south-1.amazonaws.com/Orion/AGP/AUTO/userId-cb3332c5-98e3-4fc1-9676-874788ab8297/lease/1717399817853_665d7109ea01077773193a98.HEIC?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAQKNKILGSTPS6DHOF%2F20240603%2Fme-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240603T074517Z&X-Amz-Expires=6000&X-Amz-Signature=2478ba031950efe4be4c1234a343fe64ec02eea9956705ad272464a6fafcb556&X-Amz-SignedHeaders=host&response-content-disposition=inline&x-id=GetObject');

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
     
   
    if (file && file.type === 'image/heic' || (file?.name.endsWith('.heic') || file?.name.endsWith('.HEIC'))) {
    
      try {
        const convertedBlob = await heic2any({
          blob: file,
          toType: 'image/png',
        });
        const pngFile = new Blob([convertedBlob], { type: 'image/png' });
        const pngUrl = URL.createObjectURL(pngFile);
        setPngUrl(pngUrl);
      } catch (error) {
        console.error('Error converting HEIC to PNG:', error);
      }
    } else {
        console.log(file)
      console.error('Please upload a HEIC file');
    }
  };

  return (
    <div>
      <input type="file" accept=".heic" onChange={handleFileChange} />
 
      {pngUrl && (
        <div>
          <p>Converted PNG:</p>
          <img src={pngUrl} width={200} alt="Converted PNG" />
          <a href={pngUrl} download="converted.png">Download PNG</a>
        </div>
      )}
    </div>
  );
};

export default HeicToPngConverter;


