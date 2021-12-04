// Get base64 string from file
export const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

// Get file from base64 string
export const getFileFromBase64 = async (base64: string) => {
  const res: Response = await fetch(base64);
  const blob: Blob = await res.blob();
  return new File([blob], 'Image', { type: 'image/png' });
};

// Get array of { imageSrc, imageFile } from array base64 string
export const getFilesFromBase64 = (base64s: string[]) => {
  return Promise.all(
    base64s.map(async (base64) => {
      const file = await getFileFromBase64(base64);
      return { imageSrc: base64, file: file };
    })
  );
};
