// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    'Apache': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'BSD': 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    'GNU GPL v3': 'https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0',
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT'
  }
  if (license === 'none of the above') {
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    'Apache': 
    'BSD': 
    'GNU GPL v3': 
    'MIT': 
  }
  if (license === 'none of the above') {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === 'none of the above') {
    return ''
  }
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
`;
}

module.exports = generateMarkdown;
