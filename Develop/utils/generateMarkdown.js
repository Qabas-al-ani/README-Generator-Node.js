// function that returns a license badge based on which license is passed
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "Apache2.0":
      badge = `https://img.shields.io/badge/License-Apache%202.0-blue.svg`;
      break;
    case "GNU GPL v3":
      badge = `https://img.shields.io/badge/License-GPLv3-blue.svg`;
      break;
    case "MIT":
      badge = `https://img.shields.io/badge/License-MIT-yellow.svg`;
      break;
    case "BSD 3-Clause License":
      badge = `https://img.shields.io/badge/License-BSD%203--Clause-blue.svg`;
      break;
    case "CC0":
      badge = `https://licensebuttons.net/l/zero/1.0/80x15.png`;
      break;
    case "Eclipse Public License 1.0":
      badge = `https://img.shields.io/badge/License-EPL%201.0-red.svg`;
      break;
    case "IBM Public License Version 1.0":
      badge = `https://img.shields.io/badge/License-IPL%201.0-blue.svg`;
      break;
    default:
      badge = "";
  }
  return badge;
}

//  function that returns the license link If there is no license
function renderLicenseLink(license) {
  let link = "";
  switch (license) {
    case "Apache2.0":
      link = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case "GNU GPL v3":
      link = `https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case "MIT":
      link = `https://opensource.org/licenses/MIT`;
      break;
    case "BSD 3-Clause License":
      link = `https://opensource.org/licenses/BSD-3-Clause`;
      break;
    case "CC0":
      link = `http://creativecommons.org/publicdomain/zero/1.0/`;
      break;
    case "Eclipse Public License 1.0":
      link = `https://opensource.org/licenses/EPL-1.0`;
      break;
    case "IBM Public License Version 1.0":
      link = `https://opensource.org/licenses/IPL-1.0`;
      break;
    default:
      link = "";
  }
  return link;
}

//  a function that returns the license section of README If there is no license
function renderLicenseSection(data) {
  if (data.license[0] === undefined) {
    return "";
  } else {
    let licenses = "";
    for (let i = 0; i < data.license.length; i++) {
      licenses += `[![License](${renderLicenseBadge(
        data.license[i]
      )})](${renderLicenseLink(data.license[i])})`;
    }
    return licenses;
  }
}

const renderTechnologies = (technologies) => {
  let technologyContent = "";
  let technologiesArr = technologies.split(",");
  for (const technology of technologiesArr) {
    technologyContent += `- ${technology}.
`;
  }
  return technologyContent;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ----
  ${renderLicenseSection(data)}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Technologies](#Technologies)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Questions](#questions)

## Description:
${data.description}


## Technologies
${renderTechnologies(data.technologies)}



## Features
${data.features}


### Installation
${data.installation}


### Usage
${data.usage}


### Contribution
${data.contribution}


### Test-Instructions
${data.tests}


### A Screenshot of my deployed ${data.title}

![ScreenShots](${data.screenshot}) 

[full demo video](${data.demo})

### Questions? 
For any questions, please contact me with the information below:

${data.email}

[LinkedIn Profile](${data.linkedIn})

[Github Profile](https://github.com/${data.username})

`;
}
// generateMarkdown function
module.exports = generateMarkdown;
