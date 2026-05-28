const { exec } = require("child_process");

function runTest(command, label) {
  console.log(`\n===== Running: ${label} =====\n`);

  return new Promise((resolve) => {
    exec(command, (error, stdout, stderr) => {
      console.log(stdout);
      if (stderr) console.log(stderr);
      resolve();
    });
  });
}

async function runAllTests() {
  await runTest("npm test", "Mahat - GET ALL TEST");

  // Quand tu recevras les URLs des autres étudiants :
  // await runTest("node otherStudentTest.js", "Student 2 Test");
  // await runTest("node anotherStudentTest.js", "Student 3 Test");

  console.log("\n===== ALL TESTS COMPLETED =====\n");
}

runAllTests();
