// Creates a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)]`
  } else if (license === 'APACHE 2.0') {
    return `[![License: APACHE 2.0](https://img.shields.io/badge/License-APACHE_2.0-blue.svg)]`
  } else if (license === 'GPLv3.0') {
    return `[![License: GPLv3.0](https://img.shields.io/badge/License-GPLv3.0-blue.svg)]`
  } else if (license === 'BSD_3') {
    return `[![License: BSD_3](https://img.shields.io/badge/License-BSD_3-blue.svg)]`
  } else {
    return '';
  }
}

// Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `*[License](#license)`;
  } else {
    return '';
  };

}

// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `

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
  * [Tests](#tests)
  * [Questions](#questions)

  

  ## Installation
  
  To install the necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}

  ## Contribution
  
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions

  If you would like to contact me for further information, be sure to reach out to me at ${data.email}
  
  If you would like to know how to setup dependencies, check out my repo at ${data.GitHub}
  
  `;
}




module.exports = generateMarkdown;
