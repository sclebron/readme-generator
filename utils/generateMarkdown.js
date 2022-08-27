// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none of the above') {
    return ''
  };
  const badges = {
    'Apache': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'BSD': 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    'GNU GPL v3': 'https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0',
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT'
  };
  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none of the above') {
    return ''
  } 
  const links = {
    'Apache': 'https://opensource.org/licenses/Apache-2.0',
    'BSD': 'https://opensource.org/licenses/BSD-3-Clause',
    'GNU GPL v3': 'https://www.gnu.org/licenses/gpl-3.0',
    'MIT': 'https://opensource.org/licenses/MIT'
  };
  return links[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none of the above') {
    return ''
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contributions}
  ##Tests
  ${data.tests}
  ## License
  ${data.license}
  ##Badges
  ## Questions
		If you have any questions about the repo, open an issue or contact me directly at <${email}>.
		You can find more of my work on [my GitHub](https://github.com/${git}).
}

module.exports = generateMarkdown;
