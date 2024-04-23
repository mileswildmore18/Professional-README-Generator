// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[license title](license url)`
  }
  return '';
}

// Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  return license `[license](https://github.com/mileswildmore18/Professional-README-Generator)`
}

// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {license}
return `
## License
This project is license with ${license }`


// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.description}
  ## Description

  ${data.description}

  ## Table of Contents

  [Installation(#installation)]
  
  [Usage(#usage)]
  ${renderLicenseLink(data.license)}

  [Tests(#tests)]
  
  [Questions(#questions)]
    
  `;
}




module.exports = generateMarkdown;