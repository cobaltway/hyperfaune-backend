const Env = use('Env');
const fs = use('fs-extra');
const path = use('path');

module.exports.removeFile = async (oldFile, filepath) => {
  if (oldFile) {
    const oldFilePath = path.join(
      Env.get('PUBLIC_PATH'),
      `/static/${filepath}/`,
      path.basename(oldFile)
    );
    if (await fs.exists(oldFilePath)) await fs.unlink(oldFilePath);
  }
};

module.exports.hostFile = async (file, oldFile, filepath, filename) => {
  if (!file) return oldFile;

  const basePath = `/static/${filepath}/`;
  const name = `${filename}_${Date.now()}.${file.subtype}`;

  await module.exports.removeFile(oldFile, filepath);

  const newFilePath = path.join(Env.get('PUBLIC_PATH'), basePath);
  await file.move(newFilePath, { name });

  return `${Env.get('APP_URL')}${basePath}${name}`;
};
