const badgeArr = [{
  licenseName: 'Apache',
  licenseBadge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
},
{
  licenseName: 'BSD',
  licenseBadge: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
},
{
  licenseName: 'GNU GPL v3',
  licenseBadge: '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'
},
{
  licenseName: 'MIT',
  licenseBadge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
},
{
  licenseName: 'none of the above',
  licenseBadge: 'none of the above'
}
]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ''
}
let result = badgeArr.find(n => n.licenseName === license);
const { licenseBadge } = result
return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
      let section = ``
      return section
  }

  let result = badgeArr.find(n => n.licenseName === license);
  const { licenseName } = result
  let section = `This is licensed under the ${licenseName} license`
  return section
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contributions}
  ## Tests
  ${data.tests}
  ## License
  ${data.license}
  ## Questions
		If you have any questions about the repo, open an issue or contact me directly at <${data.email}>.
		You can find more of my work on [my GitHub](https://github.com/${data.git}).`
}

module.exports = generateMarkdown;
