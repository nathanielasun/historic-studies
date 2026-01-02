import fs from 'fs/promises';
import path from 'path';

export default async (req, res) => {
    try {
      // Specify the path to your file
      const filePath = path.join(process.cwd(), 'path/to/your/file.txt');
  
      // Read the file content
      const content = await fs.readFile(filePath, 'utf-8');
  
      // Return the content as JSON
      res.status(200).json({ content });
    } catch (error) {
      console.error('Error reading file:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  //makes ESLint mad - no anonymous default exports