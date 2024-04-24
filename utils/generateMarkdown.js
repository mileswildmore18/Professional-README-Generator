// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[Github License](https://img.shields.io/badge/License-${license}-green)`
  } else {
    return '';
  }
}

// Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  return license ? `*[License](#license)` : ``;
}

// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `

## License
This project is licensed with ${license}`
  }
  return ``;
}
// Creates a function that generates markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
 ## Description
  
${data.description}

 ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
     ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Test](#tests)
  * [Questions](#questions)

  

  ## Installation
  
  To install the necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ## License
  
  ${data.license}

  ## Contribution
  
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions

  If you would like to contact me for further information, be sure to reach out to me at ${email}
  
  If you would like to know how to setup dependencies, check out my repo at ${GitHub}
  
  `;
}




module.exports = generateMarkdown;
