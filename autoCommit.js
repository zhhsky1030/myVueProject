const shell = require('shelljs');
const { exec, echo, exit } = shell;
const name = process.argv[2] || 'Auto-commit';

// exec(`git pull`, (code) => {
//   if (code !== 0) {
//     echo('Error: Git pull failed');
//   } else {
//     exec(`git commit "${name}"`, (code) => {
//       if (code !== 0) {
//         echo('Error: Git commit failed');
//       } else {
//         exec('git push', (code) => {
//           if (code !== 0) {
//             echo('Error: Git commit failed');
//           } else {
//             exec(`echo git success ${name}`);
//           }
//         });
//       }
//     });
//   }
// });

if (exec('git pull').code !== 0) {
  echo('Error: Git pull failed');
  exit(1);
}
// if (exec('git add .').code !== 0) {
//   echo('Error: Git add failed');
//   exit(1);
// }
if (exec(`git commit -am "${name}"`).code !== 0) {
  echo('Error: Git commit failed');
  exit(1);
}
if (exec('git push').code !== 0) {
  echo('Error: Git push failed');
  exit(1);
}
exec(`echo git success ${name}`);
