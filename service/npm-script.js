const { spawn } = require("child_process");
const path = require("path");

const runScript = (rootDir) => {
  return new Promise((resolve, reject) => {
    const subprocess = spawn("npm", ["install"], {
      cwd: rootDir,
      stdio: "pipe",
    });

    subprocess.stdout.on("data", (data) => {
      console.log(`>: ${data}`);
    });

    subprocess.on("close", (code) => {
      console.log(`npm child_process close : ${code}`);
    });
    subprocess.on("error", (err) => {
      console.error("npm error : ", err);
    });
  });
};

module.exports = {
  runScript,
};
