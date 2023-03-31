import { formatDate } from "./helpers.mjs";
import { config } from "./config.mjs";
import * as readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  let newline = line;
  const len = line.length;

  if (/^#.*$/.test(line)) {
    // this is a headline, represents a resource
    // TODO: how to tell Tana what kind of resource it
    const resource_name = line.substring(2, len);
    newline = '- ' + resource_name + '';
  }
  else {
    if (/^\s*-\s*$/.test(line)) {
    // skip lines that have only a - in them
    return;
    }
    else if (/^\s*$/.test(line)) {
      // skip blanks
      return;
    }
    else if (/^\s*- !\[\].*$/.test(line)) {
      // image line
      newline = line + " #broken_image";
    }

    // indent all lines after the first by one stop
    newline = '  ' + newline;
  }
    
  
  console.log(newline);
});

rl.once('close', () => {
   // end of input
});

// start output
console.log("%%tana%%");
//   data.split()
//   res.data.slice(0, 5).forEach((x) => {
//   console.log(`- ${x.title} #PR`);
//   console.log(`  - PR Created:: [[${formatDate(x.created_at)}]]`);
//   console.log(`  - Github User:: [[${x.user.login}]]`);
//   console.log(`  - State:: ${x.state}`);
//   console.log(`  - PR Link:: ${x.html_url}`);
//   console.log(`  - Description:`);
//   x.body?.split("\n").forEach((f) => console.log(`    - ${f}`));
// });

// })


