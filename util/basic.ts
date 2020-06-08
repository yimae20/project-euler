import * as fs from 'fs';

// ファイルの読み込み
export function readFile(fileName: string): Promise<string> {
  return new Promise((resolve, rejects) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      err ? rejects(err) : resolve(data);
    });
  });
}
