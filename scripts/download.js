/**
 * Download flow-typed declarations
 * @copyright Maichong Software Ltd. 2017 http://maichong.it
 * @date 2017-12-04
 * @author Liang <liang@maichong.it>
 */

const Path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const isFile = require('is-file');
const isDirectory = require('is-directory');
const del = require('del');
const mkdirp = require('mkdirp');
const download = require('download-github-repo');
const typed = require('./typed.json');

const tmpDir = Path.join(process.cwd(), 'tmp');
const flowDir = Path.join(process.cwd(), 'flow');

function downloadAsync() {
  if (isDirectory(tmpDir)) {
    del.sync(tmpDir);
    mkdirp.sync(tmpDir);
  }
  return new Promise((resolve, reject) => {
    download('flowtype/flow-typed', tmpDir, async(error) => {
      if (error) {
        reject(error);
      } else {
        console.log(chalk.green('Downloaded!'));
        resolve();
      }
    });
  });
}

function copy(name, version) {
  console.log(chalk.blue(`Copy ${name} ${version} ...`));
  let srcDir = Path.join(tmpDir, `definitions/npm/${name}_${version}`);
  let files = fs.readdirSync(srcDir);
  let subDir = '';
  for (let n of files) {
    if (!n.endsWith('-')) continue;
    let tmp = Path.join(srcDir, n);
    if (isDirectory.sync(tmp)) {
      subDir = n;
      break;
    }
  }
  if (!subDir) throw new Error('Can not find flow-typed definition directory!');
  let srcFile = Path.join(srcDir, subDir, `${name}_${version}.js`);
  if (!isFile.sync(srcFile)) throw new Error('Can not find flow-typed definition file!');

  let destFile = Path.join(flowDir, name + '.js');
  if (isFile.sync(destFile)) {
    del.sync(destFile);
  }

  let data = fs.readFileSync(srcFile, 'utf8');

  data = `// copy from https://github.com/flowtype/flow-typed/blob/master/definitions/npm/${name}_${version}/${subDir}/${name}_${version}.js\n\n` + data;
  
  fs.writeFileSync(destFile, data);
}

async function run() {
  try {
    console.log(chalk.blue('Download flow-typed...'));
    // await downloadAsync();
    for (let name in typed) {
      let version = typed[name];
      await copy(name, version);
    }
    console.log(chalk.green('Done!'));
  } catch (error) {
    console.error(chalk.red('Download failed:' + error.message));
    console.error(error);
  }
}

run();
