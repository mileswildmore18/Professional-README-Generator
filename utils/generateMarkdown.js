// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[Github License](https://img.shields.io/badge/License-MIT-green)`
  } else {
    return '';
  }
}

// Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  return license`[license](https://github.com/mileswildmore18/Professional-README-Generator)`
}

// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
if (license !== 'None'){
  return `

## License
This project is licensed with ${license}`
}
return ``;
} 
// Creates a function that generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  
  ## Description
  
${data.description}

  ### Table of Contents

  [Installation(#installation)]

  [Questions(#questions)]

  [Usage(#usage)]
  
  [License(#license)]

  [Contributing(#contributing)]

  [Tests(#tests)]

  [Questions(#questions)]
  
  ${GitHub}
  ${email}
  ${renderLicenseLink(data.license)}
  ${renderLicenseBadge(data.license)}`;
}




module.exports = generateMarkdown;
