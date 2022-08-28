const badgeMap ={
  'Apache': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'BSD': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  'GNU GPL v3' : '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)',
  'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ''
}
let result = badgeMap[license];
return result;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
      let section = ``;
      return section;
  }

  let section = `This is licensed under the ${license} license`;
  return section;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.license);
  let licenseBadge = renderLicenseBadge(data.license);
  return `
  ${data.title}
  ${licenseBadge}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contributions}
  ## Tests
  ${data.tests}
  ## License
  ${licenseSection}
  ## Questions
		If you have any questions about the repo, open an issue or contact me directly at <${data.email}>.
		You can find more of my work on my GitHub(https://github.com/${data.git}).`
}

module.exports = generateMarkdown;
